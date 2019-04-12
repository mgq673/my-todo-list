import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../todo/models/task';
import { TaskStatus } from './task-status.enum';

@Pipe({name: 'nonCompleted'})
export class NonCompletedPipe implements PipeTransform {
  transform(allTasks: Task[], onlyNonCompleted: boolean) {
    return onlyNonCompleted ? allTasks.filter(task => task.status === TaskStatus.NORMAL) : allTasks;
  }
}
