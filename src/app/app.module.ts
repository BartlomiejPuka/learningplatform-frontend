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
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import {AppInterceptor} from './interceptors/AppInterceptor';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonCardComponent } from './lessons/lesson-card/lesson-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MaterialModule} from './material-module/material.module';
import { SphereEngineComponent } from './sphere-engine/sphere-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingupComponent,
    LoginComponent,
    HomepageComponent,
    CoursesComponent,
    CourseCardComponent,
    LessonsComponent,
    LessonCardComponent,
    SphereEngineComponent
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
