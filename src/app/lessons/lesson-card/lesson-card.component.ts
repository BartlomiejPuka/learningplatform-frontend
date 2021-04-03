import {Component, Input, OnInit} from '@angular/core';
import {LessonCardPayload} from '../models/lesson.card.payload';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {
  @Input() lesson: LessonCardPayload;

  constructor() { }

  ngOnInit(): void {
  }

}
