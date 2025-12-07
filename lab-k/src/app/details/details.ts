import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PersonLs } from '../person-ls';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  imports: [ RouterLink ],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit{
  personId?: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personLsService: PersonLs,
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
      this.person = this.personId
        ? this.personLsService.getPerson(this.personId) : undefined;
    });
  }
}
