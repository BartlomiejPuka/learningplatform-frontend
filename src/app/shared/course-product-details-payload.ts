import {LessonPayload} from './lesson-payload';
import {TaskPayload} from './task-payload';
import {CourseScopePayload} from './course-scope-payload';

export class CourseProductDetailsPayload {
  constructor(
    public courseId: number,
    public title: string,
    public description: string,
    public price: number,
    public author: string,
    public courseIconUrl: string,
    public category: string,
    public categoryIconUrl: string,
    public lessonsCount: number,
    public tasksCount: number,
    public bought: boolean,
    public inCart: boolean,
    public detailedDescription: string,
    public recipientDescription: string,
    public lessons: Array<LessonPayload>,
    public tasks: Array<TaskPayload>,
    public courseScopes: Array<CourseScopePayload>){
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.price = price;
    this.author = author;
    this.courseIconUrl = courseIconUrl;
    this.category = category;
    this.categoryIconUrl = categoryIconUrl;
    this.bought = bought;
    this.inCart = inCart;
    this.detailedDescription = detailedDescription;
    this.recipientDescription = recipientDescription;
    this.lessons = lessons;
    this.tasks = tasks;
    this.courseScopes = courseScopes;
  }
}
