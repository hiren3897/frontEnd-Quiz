import {EventEmitter, Injectable} from '@angular/core';
import {GenericServiceService} from './generic-service.service';
import {QuestionModel} from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends GenericServiceService<QuestionModel>{

  getUrl(): string {
    return 'question/';
  }
}
