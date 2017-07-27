import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSection: string;
  sectionData: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  updateSection(section: string) {
    this.currentSection = section;
    this.getData(section);
  }

  getData(type: string) {
    type === 'clubs' ? type = 'posts' : type = 'users';
    this.currentSection = type;
    this.http.get(environment.apiUrl + type)
      .subscribe(res => {
        this.sectionData = res;
// TODO: Optimize this code;
      });
  }
}
