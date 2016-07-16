import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {QuizService} from './quiz-service';
import {Seek} from './Seek';

//
class Position {
  index:number;
  total:number;

  constructor(maxPosition?:number) {
    this.total = maxPosition || 0;
    this.index = 0;
  }

  setMax(maxPosition:number) {
    this.total = maxPosition;
  }

  seek(direction:Seek) {
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
}

@Component({
  selector: 'player',
  templateUrl: './templates/player.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [QuizService, ROUTER_PROVIDERS]
})

export class PlayerComponent implements OnInit {
  position:Position;
  questions:IQuizList;
  index = 0;
  title = "";
  tagLine = "";
  current:IQuestion = {
    question: "",
    choices: []
  };
  total = 0;
  answers:Array<boolean[]> = [];
  responses = [];

  constructor(private _quizService:QuizService, private _routeParams:RouteParams) {
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

  seekToQuestion(direction:Seek) {
    if (direction !== Seek.Beginning) {
      this.answers[this.position.getPosition()] = this.getPlayerResponses(this.responses, this.current.choices);
    }

    this.position.seek(direction);
    let pos = this.position.getPosition();
    this.current = this.questions.quiz.questions[pos];
    this.responses = (this.answers[pos]) ? this.answers[pos] : [];
    this.index = pos;
  }

  getPlayerResponses(responses:Array<boolean>, question:IChoice[]):boolean[] {
    let ndx:number;
    let newResponses = question.map(()=> false);

    for (ndx = 0; ndx < responses.length; ndx += 1) {
      if (responses[ndx]) {
        newResponses[ndx] = true;
      }
    }
    return newResponses;
  }
}