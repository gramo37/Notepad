import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

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
  
  // Logic for clicking outside window
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    console.log('Back button pressed');
    console.log(event)
    this.gotoTodos()
  }

  ngOnInit() {
  
  }

  gotoTodos(){
    
    this.todo = {
      "sno": 8,
      "title": this.title,
      "desc": this.desc,
      "active": true
    }
    this.router.navigateByUrl('', {state: this.todo})
    
  }

}
