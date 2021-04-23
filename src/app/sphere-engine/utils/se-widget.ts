export class SeWidget{
  seWidget: any;
  constructor(seWidget: any) {
    this.seWidget = seWidget;
  }
  get id(): string{
    return this.seWidget.id;
  }
}
