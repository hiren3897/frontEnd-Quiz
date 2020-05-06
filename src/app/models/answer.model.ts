import {QuestionModel} from './question.model';
import {ExamModel} from './Exam.model';
import {UserModel} from './user.model';
import {GenericError} from './GenericError';

export class AnswerModel extends GenericError{
  id: number;
  answer: string;
  question: QuestionModel;
  examtitle: ExamModel;
  username: UserModel;

  constructor(id: number = null, answer: string = null, question: QuestionModel = null, examtitle: ExamModel = null,
              username: UserModel = null, error: string = null) {
    super(error);
    this.id = id;
    this.answer = answer;
    this.question = question;
    this.examtitle = examtitle;
    this.username = username;
  }
}
