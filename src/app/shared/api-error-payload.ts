

export class ApiErrorPayload {
  constructor(
    public message: string,
    public errors: Array<string>
  ){
    this.message = message;
    this.errors = errors;
  }
}
