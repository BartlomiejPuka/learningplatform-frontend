export class CoursePayload {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public description: string,
    public price: number,
    public category: string){
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
