

export class EnrolledTaskDetailsPayload {
  constructor(
    public completed: boolean,
    public completionDate: Date,
    public orderId: number,
    public seid: string,
    public title: string,
    public description: string
  ){
    this.completed = completed;
    this.completionDate = completionDate;
    this.orderId = orderId;
    this.seid = seid;
    this.title = title;
    this.description = description;
  }
}

