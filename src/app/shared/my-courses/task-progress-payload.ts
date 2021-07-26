

export class TaskProgressPayload {
  constructor(
    public id: number,
    public orderId: number,
    public SEID: string,
    public title: string,
    public completed: boolean,
    public completionDate: Date
  ) {
    this.id = id;
    this.orderId = orderId;
    this.SEID = SEID;
    this.title = title;
    this.completed = completed;
    this.completionDate = completionDate;
  }
}
