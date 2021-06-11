export class SeWidget{
  seWidget: any;
  constructor(seWidget: any) {
    this.seWidget = seWidget;
  }
  get id(): string{
    return this.seWidget.id;
  }
  subscribe(eventName: string, callback): void{
    this.seWidget.events.subscribe(eventName, callback);
  }
  unsubscribe(eventName: string, callback): void{
    this.seWidget.events.unsubscribe(eventName, callback);
  }
}
