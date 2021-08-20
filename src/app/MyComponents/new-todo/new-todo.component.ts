import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  options!: Boolean | true;
  title!: string;
  desc!: string;
  todo!: {
    "sno": number,
    "title": string
    "desc": string,
    "active": boolean
  }
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    // console.log(this.router.getCurrentNavigation()?.extras.state);
  }
  
  // Logic for clicking back buttons
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    console.log(event)
    this.gotoTodos()
  }

  ngOnInit() {
  
  }

  showNavbarOptions(){
    // this.options = true;
    if (this.options == false || this.options == undefined){
      this.options = true;
    }
    else{
      this.options = false;
    }
    console.log(this.options)
  }

  gotoTodos(){
    
    this.todo = {
      "sno": 8,
      "title": this.title,
      "desc": this.desc,
      "active": true
    }
    // This code will send new todo data entered to the home page
    this.router.navigateByUrl('', {state: this.todo})
    
  }

}
