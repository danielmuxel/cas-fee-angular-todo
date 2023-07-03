import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.type';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public items: Array<TodoItem> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.load().subscribe((todos) => {
      this.items = todos;
    });
  }

  onAdd(item: TodoItem) {
    this.items.push(item);
  }
}
