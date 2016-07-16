import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {QuizService} from './quiz-service';
import {Seek} from './Seek';

<<<<<<< HEAD
=======
//
>>>>>>> 4a0ac20181c68c123cbefc0bd28d1b459ca8d9e8
class Position {
  index:number;
  total:number;

<<<<<<< HEAD
  constructor(maxPosition?: number) {
=======
  constructor(maxPosition?:number) {
>>>>>>> 4a0ac20181c68c123cbefc0bd28d1b459ca8d9e8
    this.total = maxPosition || 0;
    this.index = 0;
  }

<<<<<<< HEAD
  setMax(maxPosition: number){
=======
  setMax(maxPosition:number) {
>>>>>>> 4a0ac20181c68c123cbefc0bd28d1b459ca8d9e8
    this.total = maxPosition;
  }

  seek(direction:Seek) {
<<<<<<< HEAD
    switch(direction)
    case Seek.Forward:
      if(this.index < this.total){
        this.index += 1;
      }
      break;
    case Seek.Backward:
      if(this.index){
        this.index -= 1;
      }
      break;
    case Seek.Beginning:
    this.index = 0;
    break;
  }
}

getPosition(){
  return this.index;
}

getTotal(){
  return this.total;
=======
    switch (direction) {
      case Seek.Forward:
        if (this.index < this.total) {
          this.index += 1;
        }
        break;
      case Seek.Backward:
        if (this.index) {
          this.index -= 1;
        }
        break;
      case Seek.Beginning:
        this.index = 0;
        break;
    }
  }

  getPosition() {
    return this.index;
  }

  getTotal() {
    return this.total;
  }
>>>>>>> 4a0ac20181c68c123cbefc0bd28d1b459ca8d9e8
}

@Component({
  selector: 'player',
  templateUrl: './templates/player.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [QuizService, ROUTER_PROVIDERS]
})

export class PlayerComponent implements OnInit{
  position: Position;
  questions:IQuizList;
  index = 0;
  title = "";
  tagLine = "";
  current:IQuestion = {
    question: "",
    choices: []
  };
  total = 0;

  constructor(private _quizService:QuizService, private _routeParams:RouteParams){
    this.position = new Position();
  }

  ngOnInit():any {
    this.getQuiz();
  }

  getQuiz() {
    let data = this._quizService.getQuiz(1);
    this.questions = data;
    this.title = data.title;
    this.tagLine = data.tagLine;
    this.current = data.quiz.questions[0];
    this.total = data.quiz.questions.length;

    this.position.setMax(this.total);
    this.position.seek(Seek.Beginning);
    this.seekToQuestion(Seek.Beginning);
  }

  seekToQuestion(direction:Seek){
    // if(direction !== Seek.Be)
  }
}
