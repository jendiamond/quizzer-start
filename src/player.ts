import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {QuizService} from './quiz-service';
import {Seek} from './Seek';

class Position {
  index:number;
  total:number;

  constructor(maxPosition?: number) {
    this.total = maxPosition || 0;
    this.index = 0;
  }

  setMax(maxPosition: number){
    this.total = maxPosition;
  }

  seek(direction:Seek) {
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
}

@Component({
  selector: 'player',
  templateUrl: './templates/plater.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [QuizService, ROUTER_PROVIDERS]
})

export class PlayerComponent implements OnInit {
  position: Position;
  questions:IQuizList;
  title = "";
  tagLine = "";
  currentIQuestion = {
    question = "";
    
  }


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
    this. = total = data.quiz.questions.length;

    this.position.setMax(this.total);
    this.position.seek(Seek.Beginning);
    this.seekToQuestion(Seek.Beginning);
  }

  seekToQuestion(direction:Seek){

  }
}
