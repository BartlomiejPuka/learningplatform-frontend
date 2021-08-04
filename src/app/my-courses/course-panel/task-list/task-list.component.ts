import {Component, Input, OnInit} from '@angular/core';
import {ApiHttpService} from '../../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {EnrolledCoursePayload} from '../../../shared/my-courses/enrolled-course-payload';
import {EnrolledTaskPayload} from '../../../backend-api/enrolled-course-endpoints-api/payloads/enrolled-task-payload';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() courseUrlSlug: string;
  courseTasks: Array<EnrolledTaskPayload> = [];
  constructor(
    private apiHttpService: ApiHttpService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiHttpService.get<Array<EnrolledTaskPayload>>(this.enrolledCourseEndpointsApiService.getAllCourseTasks(this.courseUrlSlug))
      .subscribe((data) => {
        this.courseTasks = data;
      });
  }

}
