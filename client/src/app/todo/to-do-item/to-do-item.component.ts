import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TodoActions from '../../store/to-do.actions';
import * as fromReducer from '../../store/to-do.reducer';
import { Observable } from 'rxjs';
import { List } from '../models/List';
import { TaskStatus } from '../shared/task-status.enum';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})

export class ToDoItemComponent implements OnInit {
  @Input() task: Task;

  list$: Observable<List>;
  editable = false;

  constructor(private store: Store<AppState>) {
    store.select(fromReducer.getTodoList).
      subscribe(d => this.list$ = d.list);
  }

  ngOnInit() {
  }

  delete() {
    this.store.dispatch(new TodoActions.RemoveTask({ id: this.task.id, list: this.list$ }))
  }


  markAsDone(e) {
    if (e.checked === true) {
      this.task.status = 'Done';
      this.store.dispatch(new TodoActions.EditTask({ task: this.task, list: this.list$ }));
    }

  }

  edit() {
    this.editable = true;
  }

  doneEditing(task) {

    this.store.dispatch(new TodoActions.EditTask({ task: this.task, list: this.list$ }));

    this.editable = false;
  }

  isTaskCompleted(task: Task) {
    return task.status === TaskStatus.DONE;
  }
}
