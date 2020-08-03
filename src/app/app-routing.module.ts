import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorksComponent } from './works/works.component';
import { Homework11Component } from '../app/works/homework11/homework11.component';
import { Homework12Component } from './works/homework12/homework12.component';
import { Homework13Component } from './works/homework13/homework13.component';
import { Homework14Component } from './works/homework14/homework14.component';
import { Homework15Component } from './homework15/homework15.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: Homework15Component },
//   { path: 'works', component: WorksComponent, children: [ 
//       // { path: '', redirectTo: 'cenzor', pathMatch: 'full' },
//     { path: 'cenzor', component: Homework11Component  },
//     {path: 'userslist', component: Homework12Component },
//     { path: 'tasklist', component: Homework13Component },
//     { path: 'phonebook', component: Homework14Component },
//   ] },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Homework15Component },
  { path: 'works', component: WorksComponent, children: [
      { path: '', redirectTo: 'cenzor', pathMatch: 'full' },
      { path: 'cenzor', component: Homework11Component },
      { path: 'userslist', component: Homework12Component },
      { path: 'tasklist', component: Homework13Component },
      { path: 'phonebook', component: Homework14Component },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
