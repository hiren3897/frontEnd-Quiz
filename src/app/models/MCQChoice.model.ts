import {QuestionModel} from './question.model';
import {GenericError} from './GenericError';

export class MCQChoiceModel extends GenericError{
  id: number;
  choice: string;
  valid: boolean;
  question: QuestionModel;

  constructor(id: number = null, choice: string = null, valid: boolean = null, question: QuestionModel = null, error: string = null) {
    super(error);
    this.id = id;
    this.choice = choice;
    this.question = question;
    this.valid = valid;
  }

}
