
export class CourseProductPayload {
  constructor(
    public courseId: number,
    public title: string,
    public description: string,
    public author: string,
    public price: number,
    public category: string,
    public lessonsCount: number,
    public tasksCount: number,
    public inCart: boolean,
    public bought: boolean,
    public urlSlug: string,
    public courseIconUrl: string,
    public categoryIconUrl: string){
    this.courseId = courseId;
    this.title = title;
    this.description = description;
    this.author = author;
    this.price = price;
    this.category = category;
    this.lessonsCount = lessonsCount;
    this.tasksCount = tasksCount;
    this.inCart = inCart;
    this.bought = bought;
    this.urlSlug = urlSlug;
    this.courseIconUrl = courseIconUrl;
    this.categoryIconUrl = categoryIconUrl; }
}
