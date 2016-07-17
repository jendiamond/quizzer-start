import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {FakeWebServer} from './fake-webserver';
import  'rxjs/Rx';

const baseUrl = "api/";
const quizzesEndPoint = "quizzes";

@Injectable()
export class QuizService implements IQuizService {
  constructor(private http:Http, @Inject(FakeWebServer) fake:FakeWebServer) {
  }

  getQuiz(id:number):Promise<IQuizList> {
    //let currentQuiz = quiz.filter((item) => item._id === id);
    return null; //currentQuiz[0];
  }

  getQuizzes():Promise<IQuizList[]> {
    return this.http.get(`${baseUrl}${quizzesEndPoint}`)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  private handleError(error:any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg);
    throw new Error(errMsg);
  }
}
