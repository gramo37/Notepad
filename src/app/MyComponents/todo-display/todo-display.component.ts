import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css'],

})
export class TodoDisplayComponent implements OnInit {
  options!: Boolean | true;
  title!: string;
  desc!: string;
  todo!: {
    "sno": number,
    "title": string
    "desc": string,
    "active": boolean,
    "options": false
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation()?.extras.state);
  }
  showNavbarOptions() {
    // this.options = true;
    if (this.options == false || this.options == undefined) {
      this.options = true;
    }
    else {
      this.options = false;
    }
    console.log(this.options)
  }
  // This code is played when we press back button 
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    console.log('Back button pressed');
    console.log(event)
    this.gotoTodos()
  }
  ngOnInit() {
    // Assigning todo values recieved from routing to the local variables
    this.title = history.state.title
    this.desc = history.state.desc
  }
  gotoTodos() {
    this.todo = {
      "sno": 8,
      "title": this.title,
      "desc": this.desc,
      "active": history.state.active,
      "options": false
    }
    this.router.navigateByUrl('', { state: this.todo })
  }
}
