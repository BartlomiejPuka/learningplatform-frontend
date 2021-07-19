
export class CourseCategoryPayload {
  constructor(
    public id: number,
    public category: string,
    public iconUrl: string){
    this.id = id;
    this.category = category;
    this.iconUrl = iconUrl;
  }
}
