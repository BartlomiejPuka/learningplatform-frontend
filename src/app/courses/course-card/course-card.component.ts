import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseCardPayload} from './course.card.payload';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Output() refreshCourses: EventEmitter<any> = new EventEmitter();
  @Input() course: CourseCardPayload;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
  }
  enrollCourse(id: number): void {
    console.log(`enrolling course of id = ${id}`);
    this.courseService.enrollCourse(id).subscribe((data) => {
      console.log(data);
    }, err => {
      console.log(err);
    }, () => {
      this.refreshCourses.emit();
    });
  }
}
