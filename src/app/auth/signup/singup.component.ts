import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SingupRequestPayload} from './signup-request.payload';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signupRequestPayload: SingupRequestPayload;
  signupForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  signup(): void {
    this.signupRequestPayload.email =  this.signupForm.get('email').value;
    this.signupRequestPayload.username =  this.signupForm.get('username').value;
    this.signupRequestPayload.password =  this.signupForm.get('password').value;
    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('');
      });
  }
}
