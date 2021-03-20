import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CourseCardPayload} from './course-card/course.card.payload';
import {CourseService} from './course.service';
import {BehaviorSubject, Observable, Subscription, throwError} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses: Array<CourseCardPayload>;

  constructor(private courseService: CourseService) { }
  ngOnInit(): void { this.initCourses(); }
  ngOnDestroy(): void { }
  initCourses(): void {
    this.courseService.getAllCourses().subscribe(data => {
      console.log("fetched data:");
      console.log(data);
      this.courses = data;
    }, err => {
      console.log(err);
    });
  }
  onRefresh(): void {
    this.initCourses();
  }
}
