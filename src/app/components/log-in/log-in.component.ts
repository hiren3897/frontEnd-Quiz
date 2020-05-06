import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  user: UserModel = new UserModel();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  registerPage() {
    this.router.navigate((['register']));
  }
  LoginCredential() {
    this.userService.setEndUrl('Authentication');
    this.userService.post(this.user, (user: UserModel) => {
      this.user = user;
      console.log(user);

      if (this.user.type === 'Admin') {
        this.router.navigate((['admin_dashboard']));

      }else {
        this.router.navigate((['student_dashboard']));
      }
    });
  }
}
