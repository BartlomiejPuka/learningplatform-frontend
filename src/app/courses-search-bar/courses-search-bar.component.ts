import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {QueryStringParameters} from '../backend-api/query-string-parameters';
import {CoursePayload} from '../shared/course-payload';
import {Router} from '@angular/router';
import {CourseEndpointsApiService} from '../backend-api/course-endpoints-api/course-endpoints-api.service';

@Component({
  selector: 'app-courses-search-bar',
  templateUrl: './courses-search-bar.component.html',
  styleUrls: ['./courses-search-bar.component.css']
})
export class CoursesSearchBarComponent implements OnInit {
  myControl = new FormControl();
  filteredCourses: Array<CoursePayload>;
  constructor(
    private apiHttpService: ApiHttpService,
    private courseEndpointsApiService: CourseEndpointsApiService,
    private router: Router,
  ) {
    this.filteredCourses = new Array<CoursePayload>();
  }

  ngOnInit(): void {
    this.getCourses();
  }
  // tslint:disable-next-line:typedef
  onInputChanged(value: string) {
    this.getCourses(value).subscribe(data => {
      this.filteredCourses = data.slice(0, 10);
    });
  }
  getCourses(title?: string): Observable<Array<CoursePayload>>{
    if (!title) {
      this.filteredCourses = new Array<CoursePayload>();
      return;
    }
    const queryStringHandler = (qs: QueryStringParameters) => {
        qs.push('title', title);
      };
    return this.apiHttpService.get(this.courseEndpointsApiService.getCourses(queryStringHandler));
  }
  goToCourseDetails(course: CoursePayload): void {
    // tslint:disable-next-line:only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function(): boolean {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['course/', course.urlSlug]);
  }
}
