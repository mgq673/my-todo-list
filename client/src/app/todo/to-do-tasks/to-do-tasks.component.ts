import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Task } from '../models/task';
import { TaskStatus } from '../../shared/task-status.enum';
import * as fromReducer from '../../store/to-do.reducer';
import * as TodoActions from '../../store/to-do.actions';
import { List } from '../models/List';

@Component({
  selector: 'app-to-do-tasks',
  templateUrl: './to-do-tasks.component.html',
  styleUrls: ['./to-do-tasks.component.css']
})
export class ToDoTasksComponent implements OnInit {

  tasks: Task[];
  len: number;
  list: List;
  onlyNonCompleted = false;

  constructor(private store: Store<AppState>) {

    store.select(fromReducer.getTodoList)
      .subscribe((d) => {
        if (d.list) {
          this.tasks = d.list.tasks;
          this.list = d.list;
          if (this.tasks) {
            //TODO: find a way to use pipe
            this.len = (this.tasks.filter(t => t.status === TaskStatus.NORMAL)).length;

          }
        }
      });
  }

  ngOnInit() {
  }

  removeCompleted(): void {
    this.store.dispatch(new TodoActions.RemovAllDoneTask({ list: this.list }));
  }
}
