import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


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
