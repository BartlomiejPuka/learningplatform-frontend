import { Component, OnInit } from '@angular/core';
import {CourseCardPayload} from './course-card/course.card.payload';
import {CourseService} from './course.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<CourseCardPayload>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(data => {
      console.log(data);
      this.courses = data;
    }, error => {
      throwError(error);
    });
  }

}
