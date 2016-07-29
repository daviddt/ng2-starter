import { Component, OnInit } from '@angular/core';

import { TodosComponent } from './todos/todos.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.css'
  ],
  directives: [
    TodosComponent
  ]
})
export class AppComponent implements OnInit {
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
