export class LessonCardPayload {
  constructor(public id: number, public title: string, public description: string, public courseName: string, public moduleName: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.courseName = courseName;
    this.moduleName = moduleName;
  }
}
