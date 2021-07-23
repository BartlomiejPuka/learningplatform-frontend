
export class LessonFilePayload {
  constructor(
    public id: number,
    public fileUrl: string
  ) {
    this.id = id;
    this.fileUrl = fileUrl;
  }
}
