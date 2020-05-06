import {AnswerModel} from './answer.model';
import {GenericError} from './GenericError';
import {ExamModel} from './Exam.model';

export class QuestionModel extends GenericError{
  id: number;
  question: string;
  examtitle: ExamModel;
  type: string;


  constructor(id: number = null, question: string = null, type: string = null, examtitle: ExamModel = null, error: string = null) {
    super(error);
    this.id = id;
    this.question = question;
    this.type = type;
    this.examtitle = examtitle;
  }
}
