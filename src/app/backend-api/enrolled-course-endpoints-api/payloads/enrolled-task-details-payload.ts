

export class EnrolledTaskDetailsPayload {
  constructor(
    public completed: boolean,
    public completionDate: Date,
    public orderId: number,
    public seid: string,
    public title: string,
    public description: string,
    public taskUrlSlug: string,
    public courseUrlSlug: string,
  ){
    this.completed = completed;
    this.completionDate = completionDate;
    this.orderId = orderId;
    this.seid = seid;
    this.title = title;
    this.description = description;
    this.taskUrlSlug = taskUrlSlug;
    this.courseUrlSlug = courseUrlSlug;
  }
}

