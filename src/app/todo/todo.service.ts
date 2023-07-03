import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { TodoItem } from './todo.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private httpClient: HttpClient, private snackbar: MatSnackBar) {}

  public load(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>('assets/todo.json').pipe(
      tap(() =>
        this.snackbar.open('Todo list loaded', '', { duration: 3000 })
      ),
      catchError((e) => {
        this.snackbar.open('Error loading todo list', '', { duration: 3000 });
        return [];
      })
    );
  }
}
