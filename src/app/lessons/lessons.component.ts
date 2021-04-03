import { Component, OnInit } from '@angular/core';
import {LessonCardPayload} from './models/lesson.card.payload';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Array<LessonCardPayload>;
  totalItems = 20;
  itemsPerPage = 9;
  currentPage = 1;
  constructor() { }

  ngOnInit(): void {
    this.getMockData();
  }
  getMockData(): void {
    this.lessons = [];
    for (let i = 0; i < this.totalItems; i++){
      this.lessons.push(new LessonCardPayload(1, `Lekcja ${i}`, 'Blap', 'Kurs 1', 'Moduł 1'));
    }
  }
  submitSearch(textContent: string): void {
    console.log(textContent);
  }

}
