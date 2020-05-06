import { Component, OnInit } from '@angular/core';
import {ExamModel} from '../../../models/Exam.model';
import {ExamService} from '../../../services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam: ExamModel = new ExamModel();
  allExams: ExamModel[];
  constructor(private examService: ExamService) { }

  ngOnInit(): void {
  }

  addExam() {
    this.examService.setEndUrl('createExam');
    this.examService.post(this.exam, (exam) => {
      this.exam = exam;
      console.log(exam);
      localStorage.setItem('exam', JSON.stringify(exam));
    });
  }

}
