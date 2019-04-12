export class Task {
  id: string;
  title: string;
  listId: string;
  status: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
