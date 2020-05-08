import { Component, OnInit } from '@angular/core';
import {ExamService} from '../../services/exam.service';
import {QuestionService} from '../../services/question.service';
import {ExamModel} from '../../models/Exam.model';
import {QuestionModel} from '../../models/question.model';
import {McqchoiceService} from '../../services/mcqchoice.service';
import {MCQChoiceModel} from '../../models/MCQChoice.model';
import {Router} from '@angular/router';
import {subscribeTo} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-exam-panel',
  templateUrl: './exam-panel.component.html',
  styleUrls: ['./exam-panel.component.css']
})
export class ExamPanelComponent implements OnInit {
  exams: ExamModel[];
  qts: QuestionModel[];
  choices: MCQChoiceModel[];
  selected: QuestionModel[];
  SelectedExam: string;
  question: string;

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
    this.question = this.selected[0].question;
  }

  LogOut() {
    this.router.navigate((['login']));
  }

}
