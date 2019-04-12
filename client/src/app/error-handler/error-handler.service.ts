import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Error } from './error';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  private error = new Error();
  private subject = new Subject<any>();

  showErrorMessage(err: any) {
    this.error.message = `Error: ${err.result}`;
    this.subject.next(this.error);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
