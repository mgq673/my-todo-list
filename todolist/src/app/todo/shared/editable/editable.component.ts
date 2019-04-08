import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';


@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})

export class EditableComponent implements OnInit {

  @Input() model;

  @Output() doneEdit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  done( ) {
    this.doneEdit.emit(this.model);
  }
}
