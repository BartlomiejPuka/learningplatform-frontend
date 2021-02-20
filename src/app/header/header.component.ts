import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../auth/shared/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

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

  constructor(private authService: AuthService, private router: Router) { }

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
    this.username = this.authService.getUserName();
  }
  ngOnDestroy(): void{
    this.isLoggedInSubscription.unsubscribe();
    this.usernameSubscription.unsubscribe();
  }
  setIsLoggedIn(value: boolean){
    console.log('is logged in ' + value);
    this.isLoggedIn = value;
  }
  setUsername(value: string){
    console.log('username ' + value);
    this.username = value;
  }
  goToUserProfile() { }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}

