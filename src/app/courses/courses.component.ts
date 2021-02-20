import { Component, OnInit } from '@angular/core';
import {CourseCardPayload} from './course-card/course.card.payload';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<CourseCardPayload> = [
    new CourseCardPayload('Java I', 'test', 'test description'),
    new CourseCardPayload('Java II', 'test', 'test description'),
    new CourseCardPayload('Java III', 'test', 'test description'),
    new CourseCardPayload('Java IV', 'test', 'test description'),
  ];

  constructor() { }

  ngOnInit(): void {
    // http://localhost:8080/api/courses
  }

}
