import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CourseCardPayload} from './course-card/course.card.payload';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
  getAllCourses(): Observable<Array<CourseCardPayload>> {
    var token: string = this.authService.getJwtToken();
    var header = {
      headers: new HttpHeaders().set('Authorization',  'Bearer ' + token)
    };
    return this.httpClient.get<Array<CourseCardPayload>>('http://localhost:8080/api/courses/user', header);
  }
  enrollCourse(id: number): Observable<any> {
    var token: string = this.authService.getJwtToken();
    var header = {
      headers: new HttpHeaders().set('Authorization',  'Bearer ' + token)
    };
    var endpoint = `http://localhost:8080/api/courses/${id}/enroll`;
    console.log(endpoint);
    console.log(token);
    return this.httpClient.post(endpoint, {}, header);
  }
}
