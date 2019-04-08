import { List } from '../../todo/models/List';

export class User {
  name: string;
  Lists: List[];
  id: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
