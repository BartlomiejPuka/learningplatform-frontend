import { Injectable } from '@angular/core';
import {ApiEndpointsService} from '../api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class EnrolledCourseEndpointsApiService extends ApiEndpointsService{

  public getAllBoughtCourses(): string {
    return this.createUrl('user/courses/bought');
  }
  public getAllNotBoughtCourses(): string {
    return this.createUrl('user/courses/not-bought');
  }
  public getCourseByCourseUrlSlug(courseUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }`);
  }
  public getAllCourseTasks(courseUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/tasks`);
  }
  public getCourseTaskDetails(courseUrlSlug: string, taskUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/tasks/${ taskUrlSlug }/details`);
  }
  public completeTask(courseUrlSlug: string, taskUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/tasks/${ taskUrlSlug }/complete`);
  }
  public getAllCourseLessons(courseUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/lessons`);
  }
  public getCourseLessonDetails(courseUrlSlug: string, lessonUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/lessons/${ lessonUrlSlug }/details`);
  }
  public completeLesson(courseUrlSlug: string, lessonUrlSlug: string): string {
    return this.createUrl(`user/courses/${ courseUrlSlug }/lessons/${ lessonUrlSlug }/complete`);
  }
}
