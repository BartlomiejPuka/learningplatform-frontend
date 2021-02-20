export class CourseCardPayload {
  constructor(public id: number, public title: string, public subtitle: string,
              public description: string, public image: Blob){
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
  }
}
