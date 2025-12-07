import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonLs } from '../person-ls';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  people!: Person[];

  constructor(
    private personLsService: PersonLs,
  ){

  }

  ngOnInit(): void {
    this.people = this.personLsService.getAll();
  }

  delete(index: number): void{
    if(confirm("Are you sure?")){
      this.personLsService.deletePerson(index);
      this.people = this.personLsService.getAll();
    }
  }
}
