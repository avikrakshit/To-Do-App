import { Component, EventEmitter, Output  } from '@angular/core';
import { ToDo } from '../../ToDo';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {
  title!: string;
  desc!: string;

  @Output()
  todoAdd: EventEmitter<ToDo> = new EventEmitter();

  onSubmit=()=>{
    console.log(this.title)
    console.log(this.title)
    const todo = {
      id: 8,
      title: this.title,
      description: this.desc,
      active: true,
      created_at: '2024-09-04'
    }
    this.todoAdd.emit(todo)
  }
}
