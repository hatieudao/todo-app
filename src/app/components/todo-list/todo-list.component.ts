import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos = [{
    id: 1,
    content: "Learn Angular",
    isDone: false,
  },{
    id: 2,
    content: "Learn Angular material",
    isDone: false,
  },{
    id: 3,
    content: "Do exercise",
    isDone: false,
  },];
  
}
