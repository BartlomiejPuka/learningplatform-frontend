import {Component, Input, OnInit} from '@angular/core';
import {EnrolledLessonPayload} from '../../../backend-api/enrolled-course-endpoints-api/payloads/enrolled-lesson-payload';
import {ApiHttpService} from '../../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  @Input() courseUrlSlug: string;
  courseLessons: Array<EnrolledLessonPayload> = [];
  constructor(private apiHttpService: ApiHttpService,
              private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.apiHttpService.get<Array<EnrolledLessonPayload>>(this.enrolledCourseEndpointsApiService.getAllCourseLessons(this.courseUrlSlug))
      .subscribe((data) => {
        console.log(data);
        this.courseLessons = data;
      });
  }

  onStartTaskButtonClicked(lessonUrlSlug: string): void {
    this.router.navigateByUrl(`/course/${ this.courseUrlSlug }/lessons/${ lessonUrlSlug }`);
  }
}
