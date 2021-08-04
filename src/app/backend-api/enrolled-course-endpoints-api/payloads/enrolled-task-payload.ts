

export class EnrolledTaskPayload {
  constructor(
    public completed: boolean,
    public completionDate: Date,
    public orderId: number,
    public SEID: string,
    public title: string,
    public description: string
    ){
     this.completed = completed;
     this.completionDate = completionDate;
     this.orderId = orderId;
     this.SEID = SEID;
     this.title = title;
     this.description = description;
  }
}

