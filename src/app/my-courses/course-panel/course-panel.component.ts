import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-panel',
  templateUrl: './course-panel.component.html',
  styleUrls: ['./course-panel.component.css']
})
export class CoursePanelComponent implements OnInit {

  courseUrlSlug: string;
  lessonsButtonChecked: boolean;
  tasksButtonChecked: boolean;
  selectedOption: string = 'tasks';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
  }

  onLessonsButtonClicked(): void {
    this.selectedOption = 'lessons';
  }

  onTasksButtonClicked(): void {
    this.selectedOption = 'tasks';
  }
}
