
interface IQuizService {
  getQuizzes(): IQuizList[];
  getQuiz(id: number): IQuizList;
}
