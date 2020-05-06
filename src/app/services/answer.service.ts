import { Injectable } from '@angular/core';
import {GenericServiceService} from './generic-service.service';
import {AnswerModel} from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService extends GenericServiceService<AnswerModel>{

  getUrl(): string {
    return '/exam';
  }
}
