import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingupComponent} from './auth/signup/singup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LessonsComponent} from './lessons/lessons.component';
import {SphereEngineComponent} from './sphere-engine/sphere-engine.component';
import {CartComponent} from './cart/cart.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseProductsComponent} from './course-products/course-products.component';
import {MyCoursesComponent} from './my-courses/my-courses.component';
import {CourseComponent} from './course/course.component';
import {LessonListComponent} from './my-courses/course-panel/lesson-list/lesson-list.component';
import {TaskListComponent} from './my-courses/course-panel/task-list/task-list.component';
import {LessonDetailsComponent} from './my-courses/course-panel/lesson-list/lesson-details/lesson-details.component';
import {TaskDetailsComponent} from './my-courses/course-panel/task-list/task-details/task-details.component';
import {CoursePanelComponent} from './my-courses/course-panel/course-panel.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, data: {animation: 0}},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sign-up', component: SingupComponent, data: {animation: 2}},
  {path: 'login', component: LoginComponent, data: {animation: 3}},
  {path: 'lessons', component: LessonsComponent},
  {path: 'sphere-engine', component: SphereEngineComponent},
  {path: 'course-products/category/:slug', component: CourseProductsComponent},
  {path: 'my-courses', component: MyCoursesComponent},
  {path: 'course/:slug', component: CourseComponent},
  {path: 'course/:slug/lessons', component: LessonListComponent},
  {path: 'course/:slug/tasks', component: TaskListComponent},
  {path: 'course/:slug/lessons/:lesson_slug', component: LessonDetailsComponent},
  {path: 'course/:slug/tasks/:task_slug', component: TaskDetailsComponent},
  {path: 'course/:slug/panel', component: CoursePanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
