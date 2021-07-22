import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {CourseCategoryPayload} from '../shared/course-category-payload';
import {Observable, Subject} from 'rxjs';
import {filter, pairwise, startWith, takeUntil} from 'rxjs/operators';
import {CourseProductPayload} from '../shared/course-product-payload';

@Component({
  selector: 'app-course-products',
  templateUrl: './course-products.component.html',
  styleUrls: ['./course-products.component.css']
})
export class CourseProductsComponent implements OnInit {

  public destroyed = new Subject<any>();

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointService: ApiEndpointsService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  courseCategoryId: number;
  courseCategoryPayload: CourseCategoryPayload;
  courseProductsPayloads: Array<CourseProductPayload>;
  ngOnInit(): void {
      this.fetchData();
  }
  fetchData(): void {
    // tslint:disable-next-line:radix
    this.courseCategoryId = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.courseCategoryId);
    this.getCourseCategoryById().subscribe(data => {
      this.courseCategoryPayload = data;
      console.log(data);
    });
    this.getCourseProducts().subscribe(data => {
      this.courseProductsPayloads = data;
      console.log(data);
    });
  }
  getCourseCategoryById(): Observable<CourseCategoryPayload> {
    return this.apiHttpService.get<CourseCategoryPayload>(this.apiEndpointService.getCategoryById(this.courseCategoryId));
  }
  getCourseProducts(): Observable<Array<CourseProductPayload>> {
    return this.apiHttpService.get<Array<CourseProductPayload>>(this.apiEndpointService.getCourseProductsByCategoryId(this.courseCategoryId));
  }
  itemAddedToCartEventHandler(value: boolean) {
    console.log('item added to cart event handler', value);
    this.fetchData();
  }
}
