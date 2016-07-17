
interface IQuizService {
  getQuizzes(): Promise<IQuizList[]>;
  getQuiz(id: number): Promise<IQuizList>;
}
