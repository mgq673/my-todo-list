import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { List } from '../../todo/models/List';
import { CustomHttpOptions } from 'src/app/core/shared/HttpsHeaders';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private httpOptions = CustomHttpOptions();

  public login(user): Observable<User> {
    const payload = { name: user.name };

    return this.http
      .post(`${environment.apiUrl}/users/login`, payload)
      .map(response => this.buildUserData(response));
  }

  public signup(newuser): Observable<User> {
    const payload = { name: newuser.name };

    return this.http
      .post(`${environment.apiUrl}/users/signup`, payload)
      .map(response => this.buildUserData(response));
  }

  addList(payload): Observable<any> {
    const { userId, title } = payload;
    return this.http
      .post(`${environment.apiUrl}/users/${userId}/lists`, { title }, this.httpOptions )
      .map(response => this.buildUserData(response));
  }


  private buildUserData(response) {
    const lists = response.result.lists
      .map((list) =>
        new List({ id: list._id, title: list.title, userId: list.userId, counter: list.counter }))
    return new User
      ({
        id: response.result._id,
        name: response.result.name,
        Lists: lists
      });
  }
}
