import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingupComponent} from './auth/signup/singup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, data: {animation: 0}},
  {path: 'courses', component: CoursesComponent, data: {animation: 1}},
  {path: 'sign-up', component: SingupComponent, data: {animation: 2}},
  {path: 'login', component: LoginComponent, data: {animation: 3}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
