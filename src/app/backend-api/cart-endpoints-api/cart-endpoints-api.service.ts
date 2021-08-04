import {Injectable} from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class CartEndpointsApiService extends ApiEndpointsService {
  public getAllCartItems(): string {
    return this.createUrl('cart');
  }

  public addCartItem(): string {
    return this.createUrl('cart/add');
  }

  public removeCartItem(id: number): string {
    return this.createUrl(`cart/items/${id}/remove`);
  }

  public submitCart(): string {
    return this.createUrl('cart/submit');
  }

  public getCartItemsCount(): string {
    return this.createUrl('cart/count');
  }
}
