import {Component, Input, OnInit} from '@angular/core';
import {CourseCardPayload} from './course.card.payload';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: CourseCardPayload;
  constructor() { }

  ngOnInit(): void {
  }

}
