import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/shared/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthStoreService} from '../auth/shared/store/auth-store.service';
import {CartNotificationService} from '../shared-services/cart-notification-service/cart-notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  username: string;
  isLoggedInSubscription: Subscription;
  usernameSubscription: Subscription;
  cartItemCount?: number;

  constructor(
    private authService: AuthService,
    private authStoreService: AuthStoreService,
    private cartNotificationService: CartNotificationService,
    private router: Router) {
    this.cartNotificationService.cartItemCount.subscribe(value => {
      this.cartItemCount = value === 0 ? null : value;
    });
  }

  ngOnInit(): void {
    this.isLoggedInSubscription = this.authService.loggedInChanged$.subscribe(value => {
      this.setIsLoggedIn(value);
      }, error => {
        console.log(error);
    });
    this.usernameSubscription = this.authService.usernameChanged$.subscribe(value => {
      this.setUsername(value);
      }, error => {
        console.log(error);
    });
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authStoreService.getUserName();
  }
  ngOnDestroy(): void{
    this.isLoggedInSubscription.unsubscribe();
    this.usernameSubscription.unsubscribe();
  }
  setIsLoggedIn(value: boolean): void{
    console.log('is logged in ' + value);
    this.isLoggedIn = value;
  }
  setUsername(value: string): void{
    console.log('username ' + value);
    this.username = value;
  }
  goToUserProfile(): void { }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}

