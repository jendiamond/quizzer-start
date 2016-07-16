import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AboutComponent} from "./about";
import {QuizComponent} from "./quiz";

@RouteConfig([
  {
    path:"/about",
    name:"About",
    component: AboutComponent
  },
  {
    path:"/login",
    name:"Login",
    component: AboutComponent
  },
  {
    path:"/quiz",
    name:"Quiz",
    component: QuizComponent
  },
  {
    path:"/player/:id",
    name: 'Player',
    component: AboutComponent
  }
])

@Component({
  selector: 'home',
  templateUrl: './templates/home.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

export class HomeComponent {
  constructor(){
  }
}