import {Component} from 'angular2/core';

// annotations come from TS
@Component({
  selector: 'jen',
  templateUrl: './templates/hello.html'
})

// classes come from es6
export class HelloComponent {
  public name:string = "<your name>";

  constructor() {
  }

  clickHandler(event) {
    alert('Bingo!');
  }
}

