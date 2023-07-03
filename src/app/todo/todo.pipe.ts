import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo.type';

@Pipe({
  name: 'todo',
  pure: false,
})
export class TodoPipe implements PipeTransform {
  transform(value: Array<TodoItem>, checked: boolean): Array<TodoItem> {
    return value?.length
      ? value.filter((item) => item.checked === checked)
      : value;
  }
}
