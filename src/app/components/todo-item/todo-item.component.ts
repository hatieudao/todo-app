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
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo.content)
  }
  removeItem(){
    this.deleteItem.emit(this.todo);
  }
}
