import {Component} from '@angular/core';

import {QuestionComponent} from './question/question.component';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [QuestionComponent]
})
export class AdminPanelComponent  {
  loadedFeature = 'question';
  constructor() {

  }
  OnNavigate(feature: string) {
    this.loadedFeature = feature;

  }
}
