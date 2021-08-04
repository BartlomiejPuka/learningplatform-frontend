import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseProductPayload} from '../../shared/course-product-payload';
import {ApiHttpService} from '../../backend-api/api-http.service';
import {ApiEndpointsService} from '../../backend-api/api-endpoints.service';
import {AddCartItemPayload} from '../../shared/add-cart-item-payload';
import {HttpResponse} from '@angular/common/http';
import {FlashMessagesService} from 'flash-messages-angular';
import {Router} from '@angular/router';
import {CartEndpointsApiService} from '../../backend-api/cart-endpoints-api/cart-endpoints-api.service';

@Component({
  selector: 'app-course-product-card',
  templateUrl: './course-product-card.component.html',
  styleUrls: ['./course-product-card.component.css']
})
export class CourseProductCardComponent implements OnInit {
  @Output() itemAddedToCart: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() courseProductPayload: CourseProductPayload;
  constructor(private apiHttpService: ApiHttpService,
              private cartEndpointApiService: CartEndpointsApiService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  addToCart(course: CourseProductPayload) {
    const addCartItemPayload = new AddCartItemPayload(course.courseId);
    this.apiHttpService
      .post(this.cartEndpointApiService.addCartItem(), addCartItemPayload, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
      if (response.status === 201) {
        this.itemAddedToCart.emit(true);
        this.flashMessagesService.show(`Dobry Wybór!<br><br>Dodałeś kurs "${ course.title }" do swojego koszyka.`, {cssClass: 'alert-success', timeout: 2000});
      } else {
        this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }

  navigateToCourseDetails(courseProductPayload: CourseProductPayload): void {
    console.log(courseProductPayload.urlSlug);
    this.router.navigate(['/course/', courseProductPayload.urlSlug]);
  }
}
