
export class CourseCategoryPayload {
  constructor(
    public id: number,
    public category: string,
    public iconUrl: string,
    public urlSlug: string){
    this.id = id;
    this.category = category;
    this.iconUrl = iconUrl;
    this.urlSlug = urlSlug;
  }
}
