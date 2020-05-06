import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {QuestionService} from '../../services/question.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Student'];
  user: UserModel = new UserModel();
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  RegisterUser() {
    this.userService.setEndUrl('register');
    this.userService.post(this.user, (user: UserModel) => {
      this.user = user;
      this.router.navigate((['login']));
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

}
