import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
    ) { }

  getData(type: string) {
//    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get(environment.apiUrl + type)
      .subscribe( res => console.log(res)
      );

  }
}
