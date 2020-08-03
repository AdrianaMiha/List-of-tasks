import { Component, OnInit } from '@angular/core';

import { IPage } from "./page.interface";
import { Page } from "./page.module";


@Component({
  selector: 'app-homework15',
  templateUrl: './homework15.component.html',
  styleUrls: ['./homework15.component.css']
})
export class Homework15Component implements OnInit {
  pages: Array<IPage> = [
    {
      picture: '../../assets/images/homework11.png', 
      name: 'Angular list of prohibited words',
      routerLink: '/works/cenzor',
    },
    {
      picture: '../../assets/images/homework12.png',
      name: 'Angular users list',
      routerLink: '/works/userslist',
    },
    {
      picture: '../../assets/images/homework13.png',
      name: 'Angular task list',
      routerLink: '/works/tasklist',
    },
    {
      picture: '../../assets/images/homework14.png',
      name: 'Angular phone book',
      routerLink: '/works/phonebook',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
