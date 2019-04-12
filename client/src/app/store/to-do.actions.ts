import { Action } from '@ngrx/store';
import { List } from '../todo/models/List';
import {User } from '../user-managment/models/user';

export enum ActionTypes {
  LOAD_TASKS = '[TODOLIST] LOAD_TASKS',
  SET_CURRENT_LIST = '[TODOLIST] SET_CURRENT_LIST',
  ADD_NEW_LIST = '[TODOLIST] ADD_NEW_LIST',
  LOAD_LISTS = '[TODOLIST] LOAD_LISTS',

  ADD_NEW_TASK = '[TODOLIST] ADD_NEW_TASK',
  EditTask = '[TODOLIST] EditTask',
  RemoveTask = '[TODOLIST] RemoveTask',
  MarkAsDone = '[TODOLIST] MarkAsDone',
  RemovAllDoneTask = '[TODOLIST] RemovAllDoneTask',

  USER_LOGIN = '[USER] USER_LOGIN',
  USER_LOGIN_SUCCESS = '[USER] USER_LOGIN_SUCCESS',
  SIGNUP = '[USER] SIGNUP',
}

export class SetCurrentList implements Action {
  readonly type = ActionTypes.SET_CURRENT_LIST;
  constructor(public payload: List) {}
}

export class AddNewTask implements Action {
  readonly type = ActionTypes.ADD_NEW_TASK;
  constructor(public payload: any) {}

}

export class AddNewList implements Action {
  readonly type = ActionTypes.ADD_NEW_LIST;
  constructor(public payload: any) {}

}

export class LoadLists implements Action {
  readonly type = ActionTypes.LOAD_LISTS;
  constructor(public payload: any) {}
}

export class RemoveTask implements Action {
  readonly type = ActionTypes.RemoveTask;
  constructor(public payload: any) {}

}


export class RemovAllDoneTask implements Action {
  readonly type = ActionTypes.RemovAllDoneTask;
  constructor(public payload: any) {}

}

export class EditTask implements Action {
  readonly type = ActionTypes.EditTask;
  constructor(public payload: any) {}

}

export class MarkAsDone implements Action {
  readonly type = ActionTypes.MarkAsDone;
  constructor(public payload: any) {}

}

export class LoadTasks implements Action {
  readonly type = ActionTypes.LOAD_TASKS;
  constructor(public payload: any) {}
}

export class UserLogin implements Action {
  readonly type = ActionTypes.USER_LOGIN;
  constructor(public payload: any) {}
}

export class UserLoginSuccess implements Action {
  readonly type = ActionTypes.USER_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class Signup implements Action {
  readonly type = ActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export type All =
    | SetCurrentList
    | AddNewTask
    | RemoveTask
    | UserLogin
    | LoadTasks
    | UserLoginSuccess
    | EditTask
    | MarkAsDone
    | RemovAllDoneTask
    | Signup
    | AddNewList
    | LoadLists
    ;
