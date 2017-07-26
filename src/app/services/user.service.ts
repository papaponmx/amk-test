import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';


@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getUsers() {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options = new RequestOptions({ headers: headers });

    return this.http.get('/api/users', options)
      .map((response: Response) => response.json());
  }
}