import {Component, OnInit} from 'angular2/core';
import {QuizService} from './quiz-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MessageComponent} from './message';

@Component({
  selector: 'quiz',
  templateUrl: './templates/quiz.html',
  directives: [ROUTER_DIRECTIVES, MessageComponent],
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
    this._quizService.getQuizzes().then(
      (quiz) => this.quizList = quiz,
      (error) => console.log(error)
<<<<<<< HEAD
      )
=======
    )
>>>>>>> e153be55cc332d103daaedf4e708dc4b3e2e88d9
  }
}
