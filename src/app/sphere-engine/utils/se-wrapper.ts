export class SeWrapper{
  se: any;
  constructor(se: any) {
    this.se = se;
  }
  widget(dataId: string): any{
    return this.se.widget(dataId);
  }
  get widgets(): Array<any>{
    return this.se.widgets;
  }
}
