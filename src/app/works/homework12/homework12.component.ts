import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework12',
  templateUrl: './homework12.component.html',
  styleUrls: ['./homework12.component.css']
})
export class Homework12Component implements OnInit {
  login: string;
  password: string;
  email: string;
  userArray: Array<any> = [];
  user: any;
  userIndex: number;
  isAdd = true;

  constructor() { }

  ngOnInit(): void {
  }
  addUser() {
    this.user = {
      login: this.login,
      password: this.password,
      email: this.email
    }
    this.userArray.push(this.user);
    this.login = '';
    this.password = '';
    this.email = '';
  }
  deleteUser(index:number):void {
    this.userArray.splice(index,1)
  }
  editUser(index: number) {
    this.userIndex = index;
    this.login = this.userArray[index].login;
    this.password = this.userArray[index].password;
    this.email = this.userArray[index].email;
    this.isAdd = false;
  }
  saveEditUser() {
    let index = this.userIndex
    this.userArray[index].login = this.login,
    this.userArray[index].password = this.password,
    this.userArray[index].email = this.email
    this.login = '';
    this.password = '';
    this.email = '';
    this.isAdd = true;
  }
}

