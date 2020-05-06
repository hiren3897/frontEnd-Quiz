import { Component, OnInit } from '@angular/core';
import {QuestionModel} from '../../../models/question.model';
import {QuestionService} from '../../../services/question.service';
import {MCQChoiceModel} from '../../../models/MCQChoice.model';
import {McqchoiceService} from '../../../services/mcqchoice.service';
import {ExamModel} from '../../../models/Exam.model';
import {ExamService} from '../../../services/exam.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: QuestionModel = new QuestionModel();
  qts: QuestionModel[];
  questionType: any = ['Single', 'MCQ'];
  SelectedQuestion: number;

  constructor(private questionService: QuestionService, private mcqchoiceService: McqchoiceService, private examsService: ExamService) {
    this.getAll();
  }

  mcqchoice: MCQChoiceModel = new MCQChoiceModel();
  mcqchoices: MCQChoiceModel[] = [];

  exams: ExamModel[] = [];
  validation: any = ['True', 'False'];
  selectedExam: number;
  ngOnInit(): void {
  }

  getAll(){
    this.examsService.setEndUrl('getallExam');
    this.examsService.getAll((exam) => {
      this.exams = exam;
    });
    this.questionService.setEndUrl('getallquestion');
    this.questionService.getAll((question ) => {
      this.qts = question;
      console.log(this.qts);
    });
  }

  addQuestion(){
    const examTemp = this.exams[this.selectedExam - 1]
    // console.log(examTemp);
    this.question.examtitle = examTemp;
   //  console.log(this.question);
   // return;
    this.questionService.setEndUrl('createQuestion');
    this.questionService.post(this.question, (question) => {
      this.showAlert();
    });
  }

  OnUpdate() {

  }

  OnEdit() {

  }

  OnDelete() {
    this.questionService.setEndUrl('deleteQuestion');
    this.questionService.delete(this.question, (question ) => {
      this.question = question;
    });

  }


// MCQ Section
  InsertChoices(question: QuestionModel){
    for ( const obj of this.mcqchoices){
      const questiontemp = new QuestionModel();
      questiontemp.id = question.id;
      questiontemp.question  = question.question;
      questiontemp.examtitle = question.examtitle;
      questiontemp.type = question.type;
      obj.question = questiontemp;
    }
  }

  showAlert(){
    alert('Question Added Successfully...');
  }
  showMCQAlert(){
    alert('Mcq Choices Added Successfully...');
  }


  addOption(){
    const questionTemp = this.qts[this.SelectedQuestion - 1];
    const examTemp = this.exams[0];
    const mcqChoice: MCQChoiceModel = new MCQChoiceModel();
    mcqChoice.choice = this.mcqchoice.choice;
    mcqChoice.valid = this.mcqchoice.valid;
    mcqChoice.question = questionTemp;
    mcqChoice.question.examtitle = examTemp;
    this.mcqchoices.push(mcqChoice);
  }

  submit() {
    this.mcqchoiceService.setEndUrl('createMcqQuestion');
    this.mcqchoiceService.postArray(this.mcqchoices, (choices ) => {
      this.showMCQAlert();
    });
  }

  OnMCQDelete(){

  }

  OnMCQEdit() {

  }

  OnMCQUpdate() {

  }

}