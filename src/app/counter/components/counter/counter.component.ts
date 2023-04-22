import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template:`
  <h3>Counter {{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="resetValue()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>


  `,
})
export class CounterComponent
{
  public counter: number = 10;
  constructor(){}

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetValue() {
    this.counter = 10;
  }

}
