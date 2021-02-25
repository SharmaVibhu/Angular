import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  getValues(val){
    console.log(val);
  }
}
//* Assignment:
//*1>Create form with id,name,age,roles 
//*2>Roles should be comma separated for now in text box
//*3>But after submit for each user roles should be an array--[admin,hr,developer] 
//*4>Then based on roles display the value of access, access_color columns 
//*5>Chnage the text color of row as well based on access and access_color column value


//*id       name     age     roles            access            access_color
//*1        test1    20       admin,hr         All access         green             


//*2        test2     24       developer       general accces     yellow*/