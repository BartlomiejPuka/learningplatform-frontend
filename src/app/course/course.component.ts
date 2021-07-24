import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseDetailsPayload} from '../shared/course-details-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {AddCartItemPayload} from '../shared/add-cart-item-payload';
import {HttpResponse} from '@angular/common/http';
import {FlashMessagesService} from 'flash-messages-angular';
import {CartNotificationService} from '../shared-services/cart-notification-service/cart-notification.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css', './course.image.b64.css']
})
export class CourseComponent implements OnInit {

  courseUrlSlug: string;
  courseDetailsPayload: CourseDetailsPayload;
  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointService: ApiEndpointsService,
    private flashMessagesService: FlashMessagesService,
    private cartNotificationService: CartNotificationService,
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

  addToCart(courseDetailsPayload: CourseDetailsPayload): void {
    const addCartItemPayload = new AddCartItemPayload(courseDetailsPayload.id);
    this.apiHttpService
      .post(this.apiEndpointService.addCartItem(), addCartItemPayload, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 201) {
          this.flashMessagesService.show(`Dobry Wybór!<br><br>Dodałeś kurs "${ courseDetailsPayload.title }" do swojego koszyka.`, {cssClass: 'alert-success', timeout: 2000});
          this.cartNotificationService.refreshCartItemsCount();
        } else {
          this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
        }
      });
  }
}
