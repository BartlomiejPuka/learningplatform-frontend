import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterOutlet} from '@angular/router';
import { slider} from './animations';
import {BehaviorSubject, Subscription} from 'rxjs';
import {CartNotificationService} from './shared-services/cart-notification-service/cart-notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent implements OnInit{
  title = 'learning-platform';
  private subscription: Subscription;
  private browserRefresh = false;

  constructor(private cartNotificationService: CartNotificationService) { }

  ngOnInit(): void {
    this.cartNotificationService.refreshCartItemsCount();
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
