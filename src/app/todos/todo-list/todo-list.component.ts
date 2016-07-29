import { Component, OnInit, Input } from '@angular/core';
import { todo } from './../todo.interface';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<todo>;
  
  constructor() { }
 
  ngOnInit() { }

}