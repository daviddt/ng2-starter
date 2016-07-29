import { Injectable } from '@angular/core';
import { todo } from './todo.interface';

@Injectable()
export class TodosService {
  todos: Array<todo>;

  constructor() { 
    this.todos = [
      { name: 'My Todo', completed: true },
      { name: 'My Todo 2', completed: false }
    ]
  }
  
  addTodo(todo: todo) {
    this.todos.push(todo);
  }
  
  getTodos(): Array<todo> {
    return this.todos;
  }
  
  removeCompletedTodos() {
    let oldTodos = this.todos.slice();
    let uncompletedTodos = oldTodos.filter(todo => !todo.completed);
    
    this.todos.length = 0;
    
    uncompletedTodos.forEach(todo => {
      this.todos.push(todo);
    });

  }

}