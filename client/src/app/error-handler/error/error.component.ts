import { Component, OnInit } from '@angular/core';
import { Error } from '../error';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error: Error;

  constructor(private errorService: ErrorHandlerService) {
    this.errorService.getMessage()
    .subscribe((error) => {
      this.error = error;
    });
   }

  ngOnInit() {

  }

}
