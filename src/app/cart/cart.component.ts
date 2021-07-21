import { Component, OnInit } from '@angular/core';
import {CartItemPayload} from '../shared/cart-item-payload';
import {ApiHttpService} from '../backend-api/api-http.service';
import {ApiEndpointsService} from '../backend-api/api-endpoints.service';

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

}
