import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {CoursePayload} from '../shared/course-payload';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../backend-api/constants';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courses-dropdown',
  templateUrl: './courses-dropdown.component.html',
  styleUrls: ['./courses-dropdown.component.css']
})
export class CoursesDropdownComponent implements OnInit {
  isMenuOpen: boolean;
  coursesMap: Map<string, Array<CoursePayload>>;
  courseKeys: Array<string>;
  courses: Array<CoursePayload>;
  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointService: ApiEndpointsService,
  )  {
    this.coursesMap = new Map<string, Array<CoursePayload>>();
    this.courseKeys = [];
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onCourseMouseEnter(course: string) {
    this.courses = this.coursesMap[course];
  }
  onMenuOpenAction(): void {
    this.getCategorizedCourses().subscribe(data => {
      this.coursesMap = data;
      console.log(this.coursesMap);
      this.courseKeys = Array.from(Object.keys(this.coursesMap));
    });
  }
  getCategorizedCourses(): Observable<Map<string, Array<CoursePayload>>> {
      return this.apiHttpService.get<Map<string, Array<CoursePayload>>>(this.apiEndpointService.getCategorizedCoursesEndpoint());
  }
}
