import {GenericError} from './GenericError';

export class UserModel extends GenericError{

  username: string;
  email: string;
  type: string;


  constructor(username: string = null, email: string = null, type: string = null, error: string = null) {
    super(error);
    this.username = username;
    this.email = email;
    this.type = type;

  }
}
