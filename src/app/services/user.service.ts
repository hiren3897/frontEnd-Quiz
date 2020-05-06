import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {GenericServiceService} from './generic-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericServiceService<UserModel>{

  getUrl(): string {
    return 'User/';
  }
}




