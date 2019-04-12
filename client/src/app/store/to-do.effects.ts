import { map, mergeMap, mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as TodoAction from './to-do.actions';
import { UserService } from '../shared/user.service';
import { TaskService } from '../shared/task.service';

@Injectable()
export class TodoEffects {

  @Effect() setCurrentList$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.SET_CURRENT_LIST),
      mergeMap((action: TodoAction.SetCurrentList) => this.taskService.getTasks(action.payload)
        .pipe(
          map((tasks) => new TodoAction.LoadTasks({ tasks }))
        ))
    );



  @Effect() userLogin$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.USER_LOGIN),
      mergeMap((action: TodoAction.UserLogin) => this.userService.login(action.payload)
        .pipe(
          map((data) => new TodoAction.UserLoginSuccess(data))
        )
      )
    );


  @Effect() userLoginSuccess$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.USER_LOGIN_SUCCESS),
      // map((data: TodoAction.UserLoginSuccess) => new TodoAction.SetCurrentList(data.payload))
      map((data: TodoAction.UserLoginSuccess) => new TodoAction.SetCurrentList(data.payload.Lists[0]))

    );



  @Effect() signup$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.SIGNUP),
      mergeMap((action: TodoAction.Signup) => this.userService.signup(action.payload)
        .pipe(
          map((data) => new TodoAction.UserLoginSuccess(data))
        )
      )
    );

    @Effect() addList$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.ADD_NEW_LIST)
      , mergeMap((action: TodoAction.AddNewList) => this.userService.addList(action.payload)
        .pipe(
          map((data) => new TodoAction.UserLoginSuccess(data))
        )
      )

    );

  @Effect() addTask$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.ADD_NEW_TASK)
      , mergeMap((action: TodoAction.AddNewTask) =>
        this.taskService.addTask(action.payload)
          .map((data) => new TodoAction.SetCurrentList(action.payload.list)
          )
      )

    );

  @Effect() deleteTask$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.RemoveTask)
      , mergeMap((action: TodoAction.RemoveTask) =>
        this.taskService.removeTask(action.payload)
          .map((data) => new TodoAction.SetCurrentList(action.payload.list)
          )
      )

    );



  @Effect() editTitleTask$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.EditTask)
      , mergeMap((action: TodoAction.EditTask) =>
        this.taskService.updateTask(action.payload)
          .map((data) => new TodoAction.SetCurrentList(action.payload.list)
          )
      )

    );


  @Effect() deleteAlDoneTask$ = this.actions$
    .pipe(
      ofType(TodoAction.ActionTypes.RemovAllDoneTask)
      , mergeMap((action: TodoAction.RemovAllDoneTask) =>
        this.taskService.removeManyTasks(action.payload)
          .map((data) => new TodoAction.SetCurrentList(action.payload.list)
          )
      )

    );

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private userService: UserService,
  ) { }
}
