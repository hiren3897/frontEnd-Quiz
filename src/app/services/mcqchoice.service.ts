import {EventEmitter, Injectable} from '@angular/core';
import {GenericServiceService} from './generic-service.service';
import {MCQChoiceModel} from '../models/MCQChoice.model';



@Injectable({
  providedIn: 'root'
})
export class McqchoiceService extends GenericServiceService<MCQChoiceModel>{
  mcqReceived = new EventEmitter<MCQChoiceModel[]>();
  private mcq = new MCQChoiceModel();
  mcqs: MCQChoiceModel[] = [new MCQChoiceModel(this.mcq.id, this.mcq.choice, this.mcq.valid, this.mcq.question, this.mcq.error)];


  getUrl(): string {
    return 'MCQ/';
  }

  getMCQ() {
    return this.mcqs.slice();
  }

  setMCQ(mcq: MCQChoiceModel) {
    this.mcqs.push(mcq);
    this.mcqReceived.emit(this.mcqs.slice());
  }
}
