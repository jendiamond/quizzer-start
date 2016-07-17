import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: './templates/home.html',
  directives: [ROUTER_DIRECTIVES, FooterComponent],
  providers: [ROUTER_PROVIDERS]
})

export class HomeComponent {
  constructor() {
  }
}
