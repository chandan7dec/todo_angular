import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  "title":string;
  "desc":string;
  // "sno":number;
  // "active":boolean;

  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  //@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
      
    }
    console.log("todo enterd", todo)
    this.todoAdd.emit(todo);
  }

}
