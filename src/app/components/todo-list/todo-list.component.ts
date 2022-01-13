import { TodoService } from "./../../services/todo.service";
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]> | undefined;
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
  }
  onUpdateItem(todo: Todo){
    this.todoService.updateTodo(todo);
  }
  onDeleteItem(todo: Todo){
    this.todoService.deleteTodo(todo.id);
  }
  onChangeStatusItem(todoId: number){
    this.todoService.changeStatusTodo(todoId);
  }
}
