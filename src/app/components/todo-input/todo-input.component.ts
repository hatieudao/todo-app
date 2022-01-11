import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  todoContent = '';
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    console.log('input')
  }
  addTodo(){
    console.log(this.todoContent);
    if(this.todoContent.trim() === '') return;
    this.todoService.addTodo(this.todoContent);
    this.todoContent = '';
  }
}
