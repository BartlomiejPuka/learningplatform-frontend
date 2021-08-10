import {Component, OnInit} from '@angular/core';
import {CartItemPayload} from '../shared/cart-item-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {FlashMessagesService} from 'flash-messages-angular';
import {CartNotificationService} from '../shared-services/cart-notification-service/cart-notification.service';
import {CartEndpointsApiService} from '../backend-api/cart-endpoints-api/cart-endpoints-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItemPayload>;
  constructor(private apiHttpService: ApiHttpService,
              private cartEndpointApiService: CartEndpointsApiService,
              private flashMessagesService: FlashMessagesService,
              private cartNotificationService: CartNotificationService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.apiHttpService.get<Array<CartItemPayload>>(this.cartEndpointApiService.getAllCartItems()).subscribe((data) => {
      this.cartItems = data;
      console.log(data);
    });
  }
  removeCartItem(id: number) {
    this.apiHttpService.post(this.cartEndpointApiService.removeCartItem(id), null, {observe: 'response'})
      .subscribe(( response: HttpResponse<any>) => {
      if (response.status === 200){
        this.fetchData();
        this.flashMessagesService.show(`Usunięto kurs z koszyka.`, {cssClass: 'alert-warning', timeout: 2000});
        this.cartNotificationService.refreshCartItemsCount();
      } else {
        this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }
  submitCart(): void {
    this.apiHttpService.post(this.cartEndpointApiService.submitCart(), null, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 200){
          this.fetchData();
          this.flashMessagesService.show(`Gratulacje!<br/> Udało ci się dokonać zakupu.`, {cssClass: 'alert-success', timeout: 2000});
          this.cartNotificationService.refreshCartItemsCount();
        } else {
          this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
        }
      }, (errResponse: HttpErrorResponse) => {
        console.log(errResponse);
        this.flashMessagesService.show(errResponse.error.errors, {cssClass: 'alert-danger', timeout: 2000});
    });
  }
}
