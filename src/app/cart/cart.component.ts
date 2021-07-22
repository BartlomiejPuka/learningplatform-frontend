import { Component, OnInit } from '@angular/core';
import {CartItemPayload} from '../shared/cart-item-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', './cart.image.b64.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItemPayload>;
  constructor(private apiHttpService: ApiHttpService,
              private apiEndpointService: ApiEndpointsService) { }

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
      }
    });
  }
  submitCart(): void {
    this.apiHttpService.post(this.apiEndpointService.submitCart(), null, {observe: 'response'})
      .subscribe((response: HttpResponse<any>) => {
        if (response.status === 200){
          this.fetchData();
        }
      });
  }
}
