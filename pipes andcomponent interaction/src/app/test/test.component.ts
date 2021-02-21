import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  selector: 'app-test',
  template: '<h2>{{"hello" + parentData}}</h2>  <button (click)= "fireEvent()"> Send Event</button> <h2>{{name | lowercase}}</h2><h2>{{name | uppercase}}</h2><h2>{{name | slice:4}}</h2> <h3>{{message | json}}</h3><h3>{{1.234 | number:"3.4-5"}}</h3><h3>{{1.234 | percent}}</h3>',
   styles: ['./test.component.css']
})
export class TestComponent implements OnInit {

 public name = "TypeScript";
 public message = {
   "firstName" : "Vibhu" ,
   "lastName" : "keshav"
 }
 @Input() public  parentData: any  ;
 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("child event");
  }
  
}
