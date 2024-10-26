import { Component } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from "../to-do-item/to-do-item.component";
import { AddToDoComponent } from "../add-to-do/add-to-do.component";

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, ToDoItemComponent, AddToDoComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  localItems ;
  tag="Nest Your Tasks, Simplify Your Day"
  todos: ToDo[];
  
  constructor() {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.localItems = localStorage.getItem("todos");
      if (this.localItems == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItems);
      }
    } else {
      this.todos = [];
    }
  }

  deleteToDo =(todo: ToDo) =>{
    console.log(todo);
    const curIndex = this.todos.indexOf(todo);
    this.todos.splice(curIndex,1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  addToDo =(todo: ToDo) =>{
    console.log(todo);
    this.todos.push(todo)
    console.log("new array: ",this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  toDoDone =(todo: ToDo) =>{
    console.log(todo);
    const curIndex1 = this.todos.indexOf(todo);
    this.todos[curIndex1].active = !this.todos[curIndex1].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}


