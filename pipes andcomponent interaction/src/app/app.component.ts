import { Component } from '@angular/core';
//component decorator it is basically a function that is attched to a class
@Component({
  selector: 'app-root', //meta data selection(custom html tag) is used to represent the component
  templateUrl: './app.component.html', // template used for view
  styleUrls: ['./app.component.css']   // for styling
})

export class AppComponent {
  title = ' Angular  ';
  public name = "Motivity";
  public message = "";
}

