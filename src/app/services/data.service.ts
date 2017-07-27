import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(type: string) {
    return this.http.get(environment.apiUrl + type)
      .subscribe(res => res
      );

  }
}
