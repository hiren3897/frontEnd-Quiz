import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import {ExamPanelComponent} from './components/exam-panel/exam-panel.component';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {QuestionComponent} from './components/admin-panel/question/question.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student_dashboard', component: ExamPanelComponent},
  { path: 'admin_dashboard', component: AdminPanelComponent},
  { path: 'question', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
