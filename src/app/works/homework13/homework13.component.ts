import { Component, OnInit } from '@angular/core';
import { ITask } from "./task.interface";
import { Task } from "./task.module";


@Component({
  selector: 'app-homework13',
  templateUrl: './homework13.component.html',
  styleUrls: ['./homework13.component.css']
})
export class Homework13Component implements OnInit {
 
  allTasks: Array<ITask> = [
    { id: 1, task: 'HTML5', check: true },
    { id: 2, task: 'CSS3', check: true },
    { id: 3, task: 'SCSS', check: false },
    { id: 4, task: 'JavaScript', check: false },
    { id: 5, task: 'jQuery', check: false },
    { id: 6, task: 'Angular', check: false },
  ];
  count = 6;
  id: number;
  task: string;
  check = false;
  edit = false;
  editString: string;
  taskIndex: number;
  save: string;
  constructor() { }

  ngOnInit(): void {
  }


  addTask(): void {
    const newTask: ITask = new Task(this.id, this.task, this.check);
    if (this.allTasks.length > 0) {
      newTask.id = this.allTasks.slice(-1)[0].id + 1;
    }
    this.allTasks.push(newTask);
    this.id = this.allTasks.indexOf(newTask);
    this.task = "";
    this.count = this.allTasks.length;
  }

  changeStatus(newTask: ITask): void{
    newTask.check = !newTask.check;
  }

  deleteTask(index: number): void{
    this.allTasks.splice(index, 1);
    this.edit = false;
}

  editTask(index: number): void{  
    this.save = this.allTasks[index].task;
    this.edit = true;     
    this.taskIndex = index;
  }


  saveTask(): void{   
    this.allTasks[this.taskIndex].task = this.save;
    this.edit = false;
  }
}
