import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TodoActions from '../../store/to-do.actions';
import * as fromReducer from '../../store/to-do.reducer';
import { List } from '../models/List';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  task: Task;
  addNewFlag = false;
  private list: List;

  constructor(private store: Store<AppState>) {
    this.store.select(fromReducer.getTodoList).
      subscribe((state: AppState) => {
        this.list = state.list;
      });
  }

  ngOnInit() {
  }

  toggleAdd(): void {
    this.addNewFlag = true;
    this.task = new Task();
  }

  addTask(): void {
    this.store.dispatch(new TodoActions.AddNewTask({ list: this.list, title: this.task.title }));
    this.addNewFlag = false;
  }

}
