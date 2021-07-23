import {CourseCategoryPayload} from './course-category-payload';

export class CoursePayload {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public description: string,
    public price: number,
    public urlSlug: string,
    public courseCategory: CourseCategoryPayload){
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.price = price;
    this.urlSlug = urlSlug;
    this.courseCategory = courseCategory;
  }
}
