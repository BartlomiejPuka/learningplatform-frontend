import {LessonFilePayload} from '../../../shared/lesson-file-payload';

export class EnrolledLessonPayload {
  constructor(
    public lessonId: number,
    public completed: boolean,
    public completionDate: Date,
    public orderId: number,
    public title: string,
    public description: string,
    public urlSlug: string,
    public lessonFiles: Array<LessonFilePayload>){
      this.lessonId = lessonId;
      this.completed = completed;
      this.completionDate = completionDate;
      this.orderId = orderId;
      this.title = title;
      this.description = description;
      this.urlSlug = urlSlug;
      this.lessonFiles = lessonFiles;
  }
}

