import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseProductDetailsPayload} from '../shared/course-product-details-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {AddCartItemPayload} from '../shared/add-cart-item-payload';
import {HttpResponse} from '@angular/common/http';
import {FlashMessagesService} from 'flash-messages-angular';
import {CartNotificationService} from '../shared-services/cart-notification-service/cart-notification.service';
import {CartEndpointsApiService} from '../backend-api/cart-endpoints-api/cart-endpoints-api.service';
import {CourseProductsEndpointsApiService} from '../backend-api/course-products-endpoints-api/course-products-endpoints-api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', './course.image.b64.css']
})
export class CourseComponent implements OnInit {
  courseUrlSlug: string;
  courseDetailsPayload: CourseProductDetailsPayload;
  constructor(
    private apiHttpService: ApiHttpService,
    private cartEndpointApiService: CartEndpointsApiService,
    private courseProductsEndpointApiService: CourseProductsEndpointsApiService,
    private flashMessagesService: FlashMessagesService,
    private cartNotificationService: CartNotificationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.fetchData();
  }

  fetchData(): void {
    this.apiHttpService.get<CourseProductDetailsPayload>(this.courseProductsEndpointApiService.getCourseProductsDetailsByUrlSlug(this.courseUrlSlug))
      .subscribe((data) => {
        console.log(data);
        this.courseDetailsPayload = data;
      });
  }

  addToCart(courseDetailsPayload: CourseProductDetailsPayload): void {
    const addCartItemPayload = new AddCartItemPayload(courseDetailsPayload.courseId);
    this.apiHttpService
      .post(this.cartEndpointApiService.addCartItem(), addCartItemPayload, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 201) {
          this.flashMessagesService.show(`Dobry Wybór!<br>Dodałeś kurs "${ courseDetailsPayload.title }" do swojego koszyka.`,
            {cssClass: 'alert-success', timeout: 2000});
          this.cartNotificationService.refreshCartItemsCount();
          this.fetchData();
        } else {
          this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
        }
      });
  }
  goToCourse(courseDetailsPayload: CourseProductDetailsPayload): void {
   this.router.navigateByUrl(`/course/${ this.courseUrlSlug }/panel`);
  }
}
