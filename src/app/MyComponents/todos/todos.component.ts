import { Component, ElementRef, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string | null;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private _eref: ElementRef) { 
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }

  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.todos.forEach(element => {
        element.options = false;
      });
    }
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  checkTodo(todo:Todo){
    if(todo.active == true){
      todo.active = false
     }
     else{
       todo.active = true
     }
  }

  showOptions(todo:Todo){
    if (todo.options == false || todo.options == undefined){
      this.todos.forEach((ele)=>{
        ele.options = false;
      });
      todo.options = true;
    }
    else {
      todo.options = false;
    }
  }

  ngOnInit(): void {
    // Appending the data got from routing to the todos array
    console.log(history.state.title)
    if (history.state.sno != undefined && (history.state.title != undefined || history.state.desc != undefined)){
      this.todos.unshift(history.state)

    }
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}
