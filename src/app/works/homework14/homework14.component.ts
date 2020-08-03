import { Component, OnInit } from '@angular/core';
import { IUser } from "./user.interface";
import { User } from "./user.module";

@Component({
  selector: 'app-homework14',
  templateUrl: './homework14.component.html',
  styleUrls: ['./homework14.component.css']
})
export class Homework14Component implements OnInit {
  phoneBook: Array<IUser> = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      number: '0631111111',
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0631222222',
    }, {
      firstName: 'Alejandro      ',
      lastName: 'Del Rio Albrechet',
      number: '0633333333',
    }, {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      number: '0635555555',
    }, {
      firstName: 'Ira',
      lastName: 'Tytar',
      number: '0636666666',
    }, {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      number: '0977777777',
    },
  ]

  edit = false;
  text: string;
  order: boolean;
  column: number;
  FN = 'First Name';
  LN = 'Last Name';
  N = 'Number';
  searchName: string;
  firstName: string;
  lastName: string;
  number: string;

  userIndex: number;
  add: boolean;

  constructor() { }

  ngOnInit(): void {
  }


  addPhone() {
    this.add = true;
    this.text = 'Add phone';
  }

  savePhone() {
    if (!this.edit) {
      const newUser: IUser = new User(this.firstName.toUpperCase(), this.lastName.toUpperCase(), this.number);
      this.phoneBook.push(newUser);
    }
    else {
      let index = this.userIndex;
      this.phoneBook[index].firstName = this.firstName;
      this.phoneBook[index].lastName = this.lastName;
      this.phoneBook[index].number = this.number;
    }
    this.firstName = "";
    this.lastName = "";
    this.number = '';
    this.add = false;
  }
  close() {
    this.add = false;
  }

  editUser(index: number) {
    this.userIndex = index;
    this.edit = true;
    this.add = true;
    this.text = 'Edit phone';
    this.firstName = this.phoneBook[index].firstName;
    this.lastName = this.phoneBook[index].lastName;
    this.number = this.phoneBook[index].number;
  }

  deleteUser(index: number) {
    this.phoneBook.splice(index, 1);
  }

  nameFilter() {
    this.LN = 'Last Name';
    this.N = 'Number';
    this.column = 1;
    this.order = !this.order;
    if (this.order) {
      this.FN = 'First Name ▼';
    }
    else if (!this.order) {
      this.FN = 'First Name ▲';
    }
  }

  surnameFilter() {
    this.FN = 'First Name';
    this.N = 'Number';
    this.column = 2;
    this.order = !this.order;
    if (this.order) {
      this.LN = 'Last Name ▼';
    }
    else if (!this.order) {
      this.LN = 'Last Name ▲';
    }
  }
  numberFilter() {
    this.FN = 'First Name';
    this.LN = 'Last Name';
    this.column = 3;
    this.order = !this.order;
    if (this.order) {
      this.N = 'Number ▼';
    }
    else if (!this.order) {
      this.N = 'Number ▲';
    }
  }
}
