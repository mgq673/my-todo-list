import { Task } from './task';

export class List {
  id: number;
  title: string;
  tasks: Task[];
  counter: number;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
