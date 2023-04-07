import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
@Input() todo: any;
@Input() i:any;
@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

onClick() {
  this.todoDelete.emit(this.todo);
  console.log("Delete button has been clicke")

  
}

onCheckboxClick(todo:Todo) {
  console.log("checkbox clicked");
  this.todoCheckbox.emit(todo);

}
}
