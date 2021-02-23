import { isNgTemplate } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {};
  buttonClicked = true;
  age = 20;
  selectedUser = {};
  selectedIndex = 0;
  users = [
    {
      id : 1,
      name : 'vibhu',
      age : 23
    },
    {
      id : 2,
      name : 'keshav',
      age : 23
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  saveData(){
    console.log("here inside" + this.age);
  }
  getUserById(index,user)
  {
    console.log(index,user);
    this.user = user;
    this.selectedIndex = index;
    
    }
   updateData(user){
    this.users[this.selectedIndex].id = user.id;
    this.users[this.selectedIndex].name = user.name;
    this.users[this.selectedIndex].age = user.age;
  }
}
