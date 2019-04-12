import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TodoActions from '../../store/to-do.actions';
import * as fromReducer from '../../store/to-do.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  newuser: string;
  user: User;

  constructor( private store: Store<AppState>) {
    this.store.select(fromReducer.getTodoList).
    subscribe((data: AppState) => this.user = data.user);
  }

  ngOnInit() {
  }

  login(): void {
    this.store.dispatch(new TodoActions.UserLogin({name: this.username}));
    }

    signup(): void {
      this.store.dispatch(new TodoActions.Signup({name: this.newuser}));
    }
}
