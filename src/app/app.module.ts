import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingupComponent } from './auth/signup/singup.component';
import { LoginComponent } from './auth/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomepageComponent } from './homepage/homepage.component';
import {AppInterceptor} from './interceptors/AppInterceptor';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonCardComponent } from './lessons/lesson-card/lesson-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MaterialModule} from './material-module/material.module';
import { SphereEngineComponent } from './sphere-engine/sphere-engine.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesDropdownComponent } from './courses-dropdown/courses-dropdown.component';
import {MatMenuModule} from '@angular/material/menu';
import { CoursesSearchBarComponent } from './courses-search-bar/courses-search-bar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { Constants } from './backend-api/constants';
import { CourseProductsComponent } from './course-products/course-products.component';
import { CourseProductCardComponent } from './course-products/course-product-card/course-product-card.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import {FlashMessagesModule} from 'flash-messages-angular';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingupComponent,
    LoginComponent,
    HomepageComponent,
    LessonsComponent,
    LessonCardComponent,
    SphereEngineComponent,
    CartComponent,
    ProfileComponent,
    CoursesDropdownComponent,
    CoursesSearchBarComponent,
    CourseProductsComponent,
    CourseProductCardComponent,
    MyCoursesComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    MatMenuModule,
    MatAutocompleteModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    }, Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
