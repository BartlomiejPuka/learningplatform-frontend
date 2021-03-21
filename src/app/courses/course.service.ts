import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseCardPayload} from './models/course.card.payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  userCoursesApiRoute = 'http://localhost:8080/api/course/user';
  enrollCourseApiRoute = (id) => `http://localhost:8080/api/course/${id}/enroll`;
  constructor(private httpClient: HttpClient) {
  }
  getAllCourses(): Observable<Array<CourseCardPayload>>{ return this.httpClient.get<Array<CourseCardPayload>>(this.userCoursesApiRoute); }
  enrollCourse(id: number): Observable<any> { return this.httpClient.post(this.enrollCourseApiRoute(id), {}); }
}
