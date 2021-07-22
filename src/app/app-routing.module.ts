import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingupComponent} from './auth/signup/singup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CoursesComponent} from './courses/courses.component';
import {LessonsComponent} from './lessons/lessons.component';
import {SphereEngineComponent} from './sphere-engine/sphere-engine.component';
import {CartComponent} from './cart/cart.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseProductsComponent} from './course-products/course-products.component';
import {MyCoursesComponent} from './my-courses/my-courses.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, data: {animation: 0}},
  {path: 'courses', component: CoursesComponent, data: {animation: 1}},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-up', component: SingupComponent, data: {animation: 2}},
  {path: 'login', component: LoginComponent, data: {animation: 3}},
  {path: 'lessons', component: LessonsComponent},
  {path: 'sphere-engine', component: SphereEngineComponent},
  {path: 'course-products/category/:id', component: CourseProductsComponent},
  {path: 'my-courses', component: MyCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
