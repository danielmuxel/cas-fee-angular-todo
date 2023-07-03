import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TodoItem } from '../todo.type';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
})
export class TodoAddComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Output()
  public added = new EventEmitter<TodoItem>();

  @Input({ required: true })
  public nextId: number = 0;

  public todoForm = new FormGroup({
    description: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  public onAdd(form: FormGroupDirective) {
    if (this.todoForm.valid && this.todoForm.dirty) {
      this.added.emit({
        id: this.nextId,
        description: this.todoForm.value.description ?? '',
        checked: false,
      });
    }

    form.resetForm();
    this.todoForm.reset();
    this.todoForm.markAsUntouched();
  }
}
