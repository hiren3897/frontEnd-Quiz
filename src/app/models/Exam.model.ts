import {GenericError} from './GenericError';

export class ExamModel extends GenericError{

  id: number;
  examtitle: string;

  constructor(id: number = null, examtitle: string = null, error: string = null) {
    super(error);
    this.id = id;
    this.examtitle = examtitle;
  }


}
