import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html'
})
export class MainPageComponent {
public character : Character[]= [
  {name: 'Krillin', power:1000},{name: 'Goku', power:9000},{name:'Vegeta', power:7888}
]

  constructor() { }

}

