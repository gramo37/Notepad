import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './MyComponents/new-todo/new-todo.component';
import { TodoDisplayComponent } from './MyComponents/todo-display/todo-display.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'display', component: TodoDisplayComponent },
  { path: 'newTodo', component: NewTodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
