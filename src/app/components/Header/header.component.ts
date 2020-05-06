import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureselected = new EventEmitter<string>();
  constructor(private router: Router) {
  }
  OnSelect(feature: string) {
    this.featureselected.emit(feature);

  }

  LogOut() {
    this.router.navigate((['login']));
  }

}
