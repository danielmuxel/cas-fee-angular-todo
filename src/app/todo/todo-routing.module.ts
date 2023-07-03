import { Router, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './add/todo-add.component';
import { NgModule } from '@angular/core';

export const todoRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'add', component: TodoAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
