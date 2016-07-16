import {Component} from 'angular2/core';
import {QuizService} from "./quiz-service";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'quiz',
  templateUrl: './services/quiz.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [QuizService]
})

export class QuizComponent implements OnInit {
  quizList:IQuizList[] = [];

  constructor(private _quizService:QuizService) {
  }

  ngOnInit():any {
    this.getQuiz();
  }

  getQuiz() {
    this.quizList = this._quizService.getQuizzes();
  }
}
