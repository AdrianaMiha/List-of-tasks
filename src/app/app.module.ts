import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework11Component } from './works/homework11/homework11.component';
import { Homework12Component } from './works/homework12/homework12.component';
import { Homework13Component } from './works/homework13/homework13.component';
import { Homework14Component } from './works/homework14/homework14.component';
import { SortByNamePipe } from './works/homework14/sortByName.pipe';
import { SearchPipe } from './works/homework14/search.pipe';
import { Homework15Component } from './homework15/homework15.component';
import { WorksComponent } from './works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework11Component,
    Homework12Component,
    Homework13Component,
    Homework14Component,
    SortByNamePipe,
    SearchPipe,
    Homework15Component,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
