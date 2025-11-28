import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  elements: string[];
  inputText: string;

  constructor(){
    this.inputText = '';
    this.elements = [];
  }

  ngOnInit(): void{

  }

  inputToArray(): void{
    this.elements.push(this.inputText);
    this.inputText = '';
  }

  remove(index: number): void{
    this.elements.splice(index, 1);
    console.log("remove" + index)
  }
}
