import {LessonFilePayload} from './lesson-file-payload';


export class LessonProgressPayload {
  constructor(
    public id: number,
    public orderId: number,
    public title: string,
    public description: string,
    public files: Array<LessonFilePayload>,
    public completed: boolean,
    public completionDate: Date
  ) {
    this.id = id;
    this.orderId = orderId;
    this.title = title;
    this.description = description;
    this.files = files;
    this.completed = completed;
    this.completionDate = completionDate;
  }
}
