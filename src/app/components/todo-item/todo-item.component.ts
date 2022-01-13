import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter<Todo>(); 
  @Output() updateItem: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() changStatusItem: EventEmitter<number> = new EventEmitter<number>();
  isEdit:boolean = false;
  editConnet:string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo.content)
  }
  removeItem(){
    this.deleteItem.emit(this.todo);
  }
  editItem(){
    this.isEdit = !this.isEdit;
  }
  completeTodo() {
    this.changStatusItem.emit(this.todo.id);
    // this.todo.isDone = !this.todo.isDone;
  }
  updateTodo(){
    this.updateItem.emit(this.todo);
    this.isEdit = false;
  }

}
