import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {QuestionService} from '../../services/question.service';
import {ExamModel} from '../../models/Exam.model';
import {QuestionModel} from '../../models/question.model';
import {McqchoiceService} from '../../services/mcqchoice.service';
import {MCQChoiceModel} from '../../models/MCQChoice.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam-panel',
  templateUrl: './exam-panel.component.html',
  styleUrls: ['./exam-panel.component.css']
})
export class ExamPanelComponent implements OnInit {
  exams: ExamModel[];
  qts: QuestionModel[];
  choices: MCQChoiceModel[];
  selected: any[];
  SelectedExam: string;
  question: any;
  choice: any[];
  constructor(private examService: ExamService, private questionService: QuestionService, private mcqchoiceService: McqchoiceService, private router: Router) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.examService.setEndUrl('getallExam');
    this.examService.getAll((exam) => {
      this.exams = exam;
    });
    this.questionService.setEndUrl('getallquestion');
    this.questionService.getAll((question ) => {
      this.qts = question;
      console.log(this.qts);
    });
    this.mcqchoiceService.setEndUrl('getAllMCQ');
    this.mcqchoiceService.getAll((choice ) => {
      this.choices = choice;
      console.log(this.choices);
    });
  }

  getExam() {
    this.selected = this.qts.filter(d => (d.examtitle.examtitle === this.SelectedExam));
    console.log(this.selected);

  }

  LogOut() {
    this.router.navigate((['login']));
  }

}
