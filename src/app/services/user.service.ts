import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from './authentication.service';
import { User } from '../models/iuser';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getUsers(): Observable<User[]> {
    const headers = new Headers({ 'Authorization': `Bearer  ${this.authenticationService.token}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get('/api/users', options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
