

export class TaskPayload {
  constructor(
    public id: number,
    public orderId: number,
    public title: string,
    public description: string,
    public seid: string
  ) {
    this.id = id;
    this.orderId = orderId;
    this.title = title;
    this.description = description;
    this.seid = seid;
  }
}
