export class Error {
  message: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
