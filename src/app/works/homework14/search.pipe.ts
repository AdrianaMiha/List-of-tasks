import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(phoneBook: Array<IUser>, searchString: string): unknown {
    if (!phoneBook) {
      return [];
    }
    if (!searchString) {
      return phoneBook;
    }
    else {
      return phoneBook.filter(elem => elem.firstName.toLowerCase().includes(searchString.toLowerCase())
        || elem.lastName.toLowerCase().includes(searchString.toLowerCase())
        || elem.number.toLowerCase().includes(searchString.toLowerCase()));
    }
  }
}


