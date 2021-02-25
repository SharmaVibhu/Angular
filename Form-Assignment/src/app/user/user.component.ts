import { isNgTemplate } from '@angular/compiler';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [
    {
      id : 1,
      name : 'vibhu',
      age : 23,
      role : 'Software Devloper',
      access : 'general',
      accessColor : "grey"
    },
    {
      id : 2,
      name : 'keshav',
      age : 23,
      role : 'UI Devloper',
      access : 'full access',
      accessColor : "white"
    },
    {
      id : 3,
      name : 'Akshay',
      age : 23,
      role : 'JAVA Devloper',
      access : 'general',
      accessColor : "grey"
    },
    {
      id : 4,
      name : 'Rishabh',
      age : 23,
      role : 'Full Stcak Devloper, Team lead',
      access : 'full access',
      accessColor : "white"
    }
  ]
  public color = ["red","black","pink","white"];
  constructor() { }

  ngOnInit(): void {
  
    }
}