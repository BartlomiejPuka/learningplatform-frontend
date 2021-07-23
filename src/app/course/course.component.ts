import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseDetailsPayload} from '../shared/course-details-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseUrlSlug: string;
  courseDetailsPayload: CourseDetailsPayload;
  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointService: ApiEndpointsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.fetchData();
  }

  fetchData(): void {
    this.apiHttpService.get<CourseDetailsPayload>(this.apiEndpointService.getCourseDetailsByUrlSlug(this.courseUrlSlug))
      .subscribe((data) => {
        this.courseDetailsPayload = data;
      });
  }
}
