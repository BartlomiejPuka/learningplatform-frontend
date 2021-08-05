import {Component, OnInit} from '@angular/core';
import {EnrolledCoursePayload} from '../shared/my-courses/enrolled-course-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css', './my-courses.image.b64.css']
})
export class MyCoursesComponent implements OnInit {

  enrolledCourses: Array<EnrolledCoursePayload>;
  constructor(
    private apiHttpService: ApiHttpService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiHttpService.get<Array<EnrolledCoursePayload>>(this.enrolledCourseEndpointsApiService.getAllBoughtCourses())
      .subscribe(data => {
        this.enrolledCourses = data;
    });
  }

  onStartButtonClicked(course: EnrolledCoursePayload): void {
    this.router.navigateByUrl(`/course/${ course.courseUrlSlug }/panel`);
  }
}
