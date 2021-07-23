import {LessonPayload} from './lesson-payload';
import {TaskPayload} from './task-payload';

export class CourseDetailsPayload {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public author: string,
    public iconUrl: string,
    public category: string,
    public categoryIconUrl: string,
    public lessonsCount: number,
    public tasksCount: number,
    public lessons: Array<LessonPayload>,
    public tasks: Array<TaskPayload>){
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.author = author;
    this.iconUrl = iconUrl;
    this.category = category;
    this.categoryIconUrl = categoryIconUrl;
    this.lessons = lessons;
    this.tasks = tasks;
  }
}
