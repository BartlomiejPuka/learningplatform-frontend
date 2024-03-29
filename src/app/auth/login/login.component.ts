import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginRequestPayload} from '../models/login.request.payload';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'flash-messages-angular';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: any;
  errorMsg: string;
  loginRequestPayload: LoginRequestPayload;

  constructor(private authService: AuthService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    console.log(this.loginRequestPayload);
    this.authService.login(this.loginRequestPayload).subscribe(data => {
      console.log('Login successful');
      this.flashMessagesService.show(`Poprawnie zalogowano.`, {cssClass: 'alert-success', timeout: 2000});
      this.router.navigateByUrl('');
    }, (response: HttpErrorResponse) => {
      this.isError = true;
      this.errorMsg = response.error.message;
    });
  }
}
