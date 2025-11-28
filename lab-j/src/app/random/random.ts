import { Component, Input } from '@angular/core';
import { RandomService } from '../random'

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  myNumber!: number;
  @Input() max: number = 10;

  constructor(private randomService: RandomService) { }

  btnClick(){
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean{
    return this.myNumber <= this.max / 2;
  }
}
