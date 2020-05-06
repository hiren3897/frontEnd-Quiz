import {UserModel} from './user.model';
import {ExamModel} from './Exam.model';
import {MCQChoiceModel} from './MCQChoice.model';
import {GenericError} from './GenericError';

export class MCQAnswerModel extends GenericError{
  id: number;
  mcqanswertitle: MCQAnswerModel;
  user: UserModel;
  examtitle: ExamModel;
  mcqchoice: MCQChoiceModel;

  constructor(id: number = null, mcqanswertitile: MCQAnswerModel = null, user: UserModel = null, examtitle: ExamModel = null,
              mcqchoice: MCQChoiceModel = null, error: string = null) {
    super(error);
    this.id = id;
    this.mcqanswertitle = mcqanswertitile;
    this.user = user;
    this.examtitle = examtitle;
    this.mcqchoice = mcqchoice;

  }


}
