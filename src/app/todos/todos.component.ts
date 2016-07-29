import { Component, OnInit } from '@angular/core';

import { TodosService } from './todos.service.ts';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todo } from './todo.interface';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
  providers: [
    TodosService
  ],
  directives: [
    TodoListComponent
  ]
})
export class TodosComponent implements OnInit {
  todos: Array<todo>;
  newTodo: todo = {
    name: '',
    completed: false,
  }

  constructor(private TodosService: TodosService) {
  }
  
  addTodo(newTodo: todo): void {
    let todo = Object.assign({}, newTodo);
    this.TodosService.addTodo(todo);
    newTodo.name = '';
  }
  
  removeCompletedTodos(): void {
    this.TodosService.removeCompletedTodos();
  }

  ngOnInit(): void { 
    this.todos = this.TodosService.getTodos();
  }

}