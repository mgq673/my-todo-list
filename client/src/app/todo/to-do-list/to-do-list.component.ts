import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as TodoActions from '../../store/to-do.actions';
import * as fromReducer from '../../store/to-do.reducer';
import { AppState } from '../../app.state';
import { List } from '../models/List';
import { Observable } from 'rxjs';
import { User } from 'src/app/user-managment/models/user';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  lists: List[];
  addNewFlag = false;
  newList: List;
  user: User;

  constructor( private store: Store<AppState>) {
    store.select(fromReducer.getTodoList)
    .subscribe((data: AppState) => {
      if( data.user) {
        this.lists = data.user.Lists;
        this.user = data.user;
      }
    });
   }

  ngOnInit() { }

  onSelectList(list: List): void {
    this.store.dispatch(new TodoActions.SetCurrentList(list));
  }

  addList(list: List): void {
    console.log('addList');
    this.store.dispatch(new TodoActions.AddNewList({ userId: this.user.id, title: list.title }));
    this.addNewFlag = false;
  }

  toggleAdd(){
    this.newList = new List();
    this.addNewFlag = true;
  }
}
