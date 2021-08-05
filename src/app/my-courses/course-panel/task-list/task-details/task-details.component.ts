import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnrolledTaskDetailsPayload} from '../../../../backend-api/enrolled-course-endpoints-api/payloads/enrolled-task-details-payload';
import {ApiHttpService} from '../../../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  enrolledTaskDetails: EnrolledTaskDetailsPayload;
  courseUrlSlug: string;
  taskUrlSlug: string;
  constructor(
    private apiHttpService: ApiHttpService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.taskUrlSlug = this.route.snapshot.paramMap.get('task_slug');
    this.apiHttpService.get<EnrolledTaskDetailsPayload>(this.enrolledCourseEndpointsApiService.getCourseTaskDetails(this.courseUrlSlug, this.taskUrlSlug))
      .subscribe((data) => {
        console.log(data);
        this.enrolledTaskDetails = data;
      });
  }

}
