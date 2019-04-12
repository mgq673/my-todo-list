import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Error } from './error';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() {

  }

  private error= new Error();
  private subject = new Subject<any>();

  showErrorMessage(err: any){
    console.log('FAILED OPERATION:'+ JSON.stringify(err.result));
    this.error.message = err.result;
    this.subject.next( this.error );
    // this.subject.next({ text: msg });
  }

  // getError(): Observable<Error> {
  //    return new Observable(observer => observer.next(this.error));
  // }








  sendMessage(message: string) {
      this.subject.next({ text: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }


}
