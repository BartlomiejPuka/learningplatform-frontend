import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnrolledCoursePayload} from '../../shared/my-courses/enrolled-course-payload';
import {ApiHttpService} from '../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';

@Component({
  selector: 'app-course-panel',
  templateUrl: './course-panel.component.html',
  styleUrls: ['./course-panel.component.css']
})
export class CoursePanelComponent implements OnInit {
  enrolledCourse: EnrolledCoursePayload;
  courseUrlSlug: string;
  lessonsButtonChecked: boolean;
  tasksButtonChecked: boolean;
  selectedOption: string = 'tasks';
  constructor(
    private apiHttpService: ApiHttpService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.apiHttpService.get<EnrolledCoursePayload>(this.enrolledCourseEndpointsApiService.getCourseByCourseUrlSlug(this.courseUrlSlug))
      .subscribe((data) => {
        this.enrolledCourse = data;
      });
  }

  onLessonsButtonClicked(): void {
    this.selectedOption = 'lessons';
  }

  onTasksButtonClicked(): void {
    this.selectedOption = 'tasks';
  }
}
