

export class CourseScopePayload {
  constructor(
    public id: number,
    public scope: string
  ) {
    this.id = id;
    this.scope = scope;
  }
}
