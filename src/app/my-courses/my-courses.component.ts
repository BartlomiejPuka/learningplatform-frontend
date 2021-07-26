import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css', './my-courses.image.b64.css']
})
export class MyCoursesComponent implements OnInit {

  enrolledCourses: Array<string> = [
    'Kurs pierwszy', 'Kurs drugi', 'Kurs trzeci'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
