import {EventEmitter, Injectable} from '@angular/core';
import {GenericServiceService} from './generic-service.service';
import {ExamModel} from '../models/Exam.model';


@Injectable({
  providedIn: 'root'
})
export class ExamService  extends GenericServiceService<ExamModel>{

  getUrl(): string {
    return 'exam/';
  }
}
