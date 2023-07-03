import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.type';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public items: Array<TodoItem> = [
    {
      id: 1,
      checked: true,
      description: 'Erste Angular Applikation erstellen',
    },
    { id: 2, checked: true, description: 'Todo Komponente erstellen' },
    { id: 3, checked: false, description: 'Todos anzeigen' },
    { id: 4, checked: false, description: 'Todos hinzufügen' },
    { id: 5, checked: false, description: 'Todos erledigen' },
  ];

  public todoForm = new FormGroup({
    description: new FormControl(null, [Validators.required]),
  });

  public onAdd(form: FormGroupDirective) {
    if (this.todoForm.valid && this.todoForm.dirty) {
      this.items.push({
        id: this.items.length + 1,
        description: this.todoForm.value.description ?? '',
        checked: false,
      });
    }

    form.resetForm();
    this.todoForm.reset();
    this.todoForm.markAsUntouched();
  }

  constructor() {}

  ngOnInit() {}
}
