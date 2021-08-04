import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiHttpService} from '../../backend-api/api-http.service';
import {CartEndpointsApiService} from '../../backend-api/cart-endpoints-api/cart-endpoints-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartNotificationService {
  public cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    private apiHttpService: ApiHttpService,
    private cartEndpointApiService: CartEndpointsApiService
  ) {
    window.onbeforeunload = (ev) => {
      alert('before refresh');
    };
    window.onunload = (ev) => {
      alert('after refresh');
    };
  }
  public refreshCartItemsCount(): void {
    this.apiHttpService.get<number>(this.cartEndpointApiService.getCartItemsCount())
      .subscribe(data => {
        console.log(data);
        this.cartItemCount.next(data);
      });
  }
}
