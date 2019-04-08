import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { Task } from '../models/task';
import { List } from '../models/List';
import { CustomHttpOptions } from 'src/app/core/shared/HttpsHeaders';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private httpOptions = CustomHttpOptions();

  constructor(private http: HttpClient) { }


  getTasks(list: List): Observable<Task[]> {
    return this.http
      .get(`${environment.apiUrl}/lists/${list.id}/tasks`)
      .map(response => {
        const tasks = response['result'];
        return tasks.map((task) => new Task({ id: task._id, listId: task.listid, title: task.title, status: task.status }));
      });
  }


  addTask(payload): Observable<any> {
    const { list, title } = payload;
    return this.http
      .post(`${environment.apiUrl}/lists/${list.id}/tasks`, { title }, this.httpOptions)
  }

  removeTask(payload): Observable<any> {
    const { id, list } = payload;
    return this.http
      .delete(`${environment.apiUrl}/lists/${list.id}/tasks/${id}`, this.httpOptions)
  }

  updateTask(payload): Observable<any> {
    const { task, list } = payload;
    const editPayload = { title: task.title, status: task.status};
    return this.http
      .put(`${environment.apiUrl}/lists/${list.id}/tasks/${task.id}`, editPayload , this.httpOptions);
  }

  removeManyTasks(payload): Observable<any> {
    const { Ids, list } = payload;
    const options = new Object({
      headers: this.httpOptions,
      body: Ids
    });
    return this.http
      .delete(`${environment.apiUrl}/lists/${list.id}/tasks`, options);
  }
}
