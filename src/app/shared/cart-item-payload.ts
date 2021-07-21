
export class CartItemPayload {
  constructor(
    public id: number,
    public courseTitle: string,
    public coursePrice: number,
    public courseAuthor: string){
    this.id = id;
    this.courseTitle = courseTitle;
    this.coursePrice = coursePrice;
    this.courseAuthor = courseAuthor;
  }
}
