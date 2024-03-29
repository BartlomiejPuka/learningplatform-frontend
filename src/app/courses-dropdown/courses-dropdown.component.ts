import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {CoursePayload} from '../shared/course-payload';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../backend-api/constants';
import {Observable} from 'rxjs';
import {CourseCategoryPayload} from '../shared/course-category-payload';
import {Router} from '@angular/router';
import {CourseEndpointsApiService} from '../backend-api/course-endpoints-api/course-endpoints-api.service';

@Component({
  selector: 'app-courses-dropdown',
  templateUrl: './courses-dropdown.component.html',
  styleUrls: ['./courses-dropdown.component.css']
})
export class CoursesDropdownComponent implements OnInit {
  isMenuOpen: boolean;
  coursesMap: Map<string, Array<CoursePayload>>;
  courseKeys: Array<CourseCategoryPayload>;
  courses: Array<CoursePayload>;
  constructor(
    private apiHttpService: ApiHttpService,
    private courseEndpointApiService: CourseEndpointsApiService,
    private router: Router
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
    this.getCategories().subscribe(data => {
      this.courseKeys = data;
    });
    this.getCategorizedCourses().subscribe(data => {
      this.coursesMap = data;
      console.log(this.coursesMap);
    });
  }
  getCategorizedCourses(): Observable<Map<string, Array<CoursePayload>>> {
      return this.apiHttpService.get<Map<string, Array<CoursePayload>>>(this.courseEndpointApiService.getCategorizedCourses());
  }
  getCourses(): Observable<Array<CoursePayload>> {
    return this.apiHttpService.get<Array<CoursePayload>>(this.courseEndpointApiService.getCourses());
  }
  getCategories(): Observable<Array<CourseCategoryPayload>> {
    return this.apiHttpService.get<Array<CourseCategoryPayload>>(this.courseEndpointApiService.getCoursesCategories());
  }
  goToCourseProducts(courseCategoryPayload: CourseCategoryPayload): void {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    console.log(courseCategoryPayload.urlSlug);
    this.router.navigate(['course-products/category/', courseCategoryPayload.urlSlug]);
  }
  goToCourseDetails(course: CoursePayload): void {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['course/', course.urlSlug]);
  }
}
