import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo; // Accepting todo from todo.component
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();
  @Output() todoOptions: EventEmitter<Todo> = new EventEmitter();
  @Output() closeOptions: EventEmitter<String> = new EventEmitter();
  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onClicked(todo: Todo){
    this.todoDelete.emit(todo);
  }


  onCheckboxClick(todo: Todo){
    this.todoCheck.emit(todo);
  }

  showOptions(todo: Todo){
    this.todoOptions.emit(todo);
  }

  editClicked(todo: Todo){
    // send data to display using routing
    this.router.navigateByUrl('/display', {state: this.todo})
    this.todoDelete.emit(todo);
  }
}
