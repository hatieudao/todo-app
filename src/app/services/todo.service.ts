import { LocalStorageService } from "./local-storage.service";
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable } from "rxjs";

// const demoTodos = [{
//     id: 1,
//     content: "Learn Angular",
//     isDone: false,
//   },{
//     id: 2,
//     content: "Learn Angular material",
//     isDone: false,
//   },{
//     id: 3,
//     content: "Do exercise",
//     isDone: false,
//   },
// ];
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private static readonly TodoStorageKey = 'todos';
  private todoSources :BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private todos!: Todo[];
  todos$: Observable<Todo[]> = this.todoSources.asObservable();
  constructor(
   private storageService: LocalStorageService
  ) { 
    this.fetchFromStorage();
  }
  private updateTodos(){
    this.todoSources.next(this.todos);
  }
  updateStorage(){
    this.storageService.setObject(TodoService.TodoStorageKey, this.todos);
    this.updateTodos();
  }
  fetchFromStorage(){
    this.todos = this.storageService.getValue<Todo[]>(TodoService.TodoStorageKey) || [];
    this.updateTodos();
  }

  getAllTodos(){
    return this.storageService.getObject(TodoService.TodoStorageKey);
  }
  addTodo(todoContent: string){
    const id = Date.now()%1e6;
    const newTodo = new Todo(id, todoContent, false);
    this.todos.unshift(newTodo);
    this.updateStorage();
  }
  updateTodo(todo: Todo){
    const pos = this.todos.findIndex(thisTodo => thisTodo.id === todo.id);
    if(pos === -1) return;
    this.todos[pos] = todo;
    this.updateStorage();

  }
  deleteTodo(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateStorage();
  }
  changeStatusTodo(id:number, status:boolean){
    const pos = this.todos.findIndex(todo => todo.id === id);
    if(pos === -1) return;
    this.todos[pos].isDone = status;
    this.updateStorage()
  }
}
