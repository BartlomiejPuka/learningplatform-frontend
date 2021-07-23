import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {CourseCategoryPayload} from '../shared/course-category-payload';
import {Observable, Subject} from 'rxjs';
import {filter, pairwise, startWith, takeUntil} from 'rxjs/operators';
import {CourseProductPayload} from '../shared/course-product-payload';
import {CartNotificationService} from '../shared-services/cart-notification-service/cart-notification.service';

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
    private cartNotificationService: CartNotificationService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  courseCategoryUrlSlug: string;
  courseCategoryPayload: CourseCategoryPayload;
  courseProductsPayloads: Array<CourseProductPayload>;
  ngOnInit(): void {
      this.fetchData();
  }
  fetchData(): void {
    // tslint:disable-next-line:radix
    this.courseCategoryUrlSlug = this.route.snapshot.paramMap.get('slug');
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
    return this.apiHttpService.get<CourseCategoryPayload>(this.apiEndpointService.getCategoryByUrlSlug(this.courseCategoryUrlSlug));
  }
  getCourseProducts(): Observable<Array<CourseProductPayload>> {
    return this.apiHttpService.get<Array<CourseProductPayload>>(this.apiEndpointService.getCourseProductsByUrlSlug(this.courseCategoryUrlSlug));
  }
  itemAddedToCartEventHandler(value: boolean) {
    console.log('item added to cart event handler', value);
    this.fetchData();
    this.cartNotificationService.refreshCartItemsCount();
  }
}
