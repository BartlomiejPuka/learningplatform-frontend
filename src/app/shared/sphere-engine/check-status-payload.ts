
export class CheckStatusPayload {
  public constructor(
    public statusDescription: string,
    public statusNumber: number,
  ) {
    this.statusDescription = statusDescription;
    this.statusNumber = statusNumber;
  }
}
