import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';
import { Task } from '../todo/models/task';
import { List } from '../todo/models/List';
import { CustomHttpOptions } from './HttpsHeaders';
import { AppState } from '../app.state';
import * as fromReducer from '../store/to-do.reducer';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private httpOptions = CustomHttpOptions();
  private loggedInUserId: string;
  private uriBase = `${environment.apiUrl}`;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store.pipe(select(fromReducer.getUserId))
      .subscribe((userId) => {
        this.loggedInUserId = userId;
      })
  }


  getTasks(list: List): Observable<Task[]> {
    return this.http
      .get(`${this.uriBase}/lists/${list.id}/tasks`, { params: { id: this.loggedInUserId } })

      .map(response => {
        const tasks = response['result'].tasks;
        return tasks.map((task) => new Task({ id: task._id, listId: task.listid, title: task.title, status: task.status }));
      });
  }


  addTask(payload): Observable<any> {
    const { list, title } = payload;
    return this.http
      // .post(`${this.uriBase}/lists/${list.id}/tasks`, { title }, this.httpOptions)
      .post(`${this.uriBase}/lists/${list.id}/tasks`, { title })

  }

  removeTask(payload): Observable<any> {
    const { id, list } = payload;
    return this.http
      .delete(`${this.uriBase}/lists/${list.id}/tasks/${id}`, this.httpOptions)
  }

  updateTask(payload): Observable<any> {
    const { task, list } = payload;
    const editPayload = { title: task.title, status: task.status };
    return this.http
      .put(`${this.uriBase}/lists/${list.id}/tasks/${task.id}`, editPayload, this.httpOptions);
  }

  removeManyTasks(payload): Observable<any> {
    const { list } = payload;
    return this.http
      .delete(`${this.uriBase}/lists/${list.id}/tasks`, this.httpOptions);
  }
}
