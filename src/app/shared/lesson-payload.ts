import {LessonFilePayload} from './lesson-file-payload';


export class LessonPayload {
  constructor(
    public id: number,
    public orderId: number,
    public title: string,
    public description: string,
    public files: Array<LessonFilePayload>
  ) {
    this.id = id;
    this.orderId = orderId;
    this.title = title;
    this.description = description;
    this.files = files;
  }
}
