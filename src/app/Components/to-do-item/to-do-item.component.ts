import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-to-do-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
 @Input() todo!: ToDo;
 @Input() i!: number;

  @Output()
  todoDelete: EventEmitter<ToDo> = new EventEmitter();

  @Output()
  todoDone: EventEmitter<ToDo> = new EventEmitter();

  onClick =(todo: ToDo) =>{
    this.todoDelete.emit(todo)
    console.log("Onclick function Called")
  }

  onClickEdit =() =>{
    console.log(this.todo)
    console.log("Onclick function Called")
  }

  onCheckboxClick =(todo: ToDo) =>{
    this.todoDone.emit(todo)
    console.log("onCheckboxClick function Called")
  }
}
