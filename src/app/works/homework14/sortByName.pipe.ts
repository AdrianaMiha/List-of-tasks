import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'sortByName',
  pure: false,
})
export class SortByNamePipe implements PipeTransform {

  transform(phoneBook: Array<IUser>, column:number, order:boolean): unknown {
    if (column === 1 && order === true) {
      return phoneBook.sort((a, b) => a.firstName !== b.firstName ? a.firstName < b.firstName ? -1 : 1 : 0);
    }
    else if (column === 1 && order === false) {
      return phoneBook.sort((a, b) => a.firstName !== b.firstName ? a.firstName > b.firstName ? -1 : 1 : 0);
    }
      
      
      
    else if (column === 2 && order === true) {
      return phoneBook.sort((a, b) => a.lastName !== b.lastName ? a.lastName < b.lastName ? -1 : 1 : 0);
    }
    else if (column === 2 && order === false) {
      return phoneBook.sort((a, b) => a.lastName !== b.lastName ? a.lastName > b.lastName ? -1 : 1 : 0);
    }
    // else if (column === 2 && order === true) {
    //   return phoneBook.sort((a, b) => a.lastName === b.lastName ? a.firstName < b.firstName ? -1 : 1 : 0);
    // }
    // else if (column === 2 && order === false) {
    //   return phoneBook.sort((a, b) => a.lastName === b.lastName ? a.firstName > b.firstName ? -1 : 1 : 0 );
    // }
      
      
      
    else if (column === 3 && order === true) {
      return phoneBook.sort((a, b) => a.number !== b.number ? a.number < b.number ? -1 : 1 : 0);
    }
    else if (column === 3 && order === false) {
      return phoneBook.sort((a, b) => a.number !== b.number? a.number > b.number ? -1 : 1 : 0);
    }
      
      
    else {
      return phoneBook;
   }
  }

}
