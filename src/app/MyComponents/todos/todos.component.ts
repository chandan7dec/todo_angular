import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  localItem: any;
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos = [
    //   {
    //     sno:1,
    //     title: "this is title",
    //     desc: "Description",
    //     active:true
    //   },
    //   {
    //     sno:2,
    //     title: "this is title2",
    //     desc: "Description",
    //     active:true
    //   },
    //   {
    //     sno:3,
    //     title: "this is title3",
    //     desc: "Description",
    //     active:true
    //   }
    // ]
  }


  deleteTodo(todo:Todo) {
    console.log(todo);
    this.todos.splice(this.todos.indexOf(todo),1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo) {
    console.log("Item Added",todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo) {
    console.log("checkbox event listner");
    const index = this.todos.indexOf(todo);
    this.todos[index].active = ! this.todos[index].active;
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
