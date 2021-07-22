import { Component, OnInit } from '@angular/core';
import {CartItemPayload} from '../shared/cart-item-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {FlashMessagesService} from 'flash-messages-angular';
import {ApiErrorPayload} from '../shared/api-error-payload';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', './cart.image.b64.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItemPayload>;
  constructor(private apiHttpService: ApiHttpService,
              private apiEndpointService: ApiEndpointsService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.apiHttpService.get<Array<CartItemPayload>>(this.apiEndpointService.getAllCartItems()).subscribe((data) => {
      this.cartItems = data;
      console.log(data);
    });
  }
  removeCartItem(id: number) {
    this.apiHttpService.post(this.apiEndpointService.removeCartItem(id), null, {observe: 'response'})
      .subscribe(( response: HttpResponse<any>) => {
      if (response.status === 200){
        this.fetchData();
        this.flashMessagesService.show(`Usunięto kurs z koszyka.`, {cssClass: 'alert-warning', timeout: 2000});
      } else {
        this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
      }
    });
  }
  submitCart(): void {
    this.apiHttpService.post(this.apiEndpointService.submitCart(), null, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 200){
          this.fetchData();
          this.flashMessagesService.show('Gratulacje!' + '<br/><br/>'  + 'Udalo ci sie dokonac zakupu.', {cssClass: 'alert-success', timeout: 2000});
        } else {
          this.flashMessagesService.show(`Operacja sie nie powiodła. Spróbuj ponownie.`, {cssClass: 'alert-danger', timeout: 2000});
        }
      }, (errResponse: HttpErrorResponse) => {
        console.log(errResponse);
        this.flashMessagesService.show(errResponse.error.errors, {cssClass: 'alert-danger', timeout: 2000});
    });
  }
}
