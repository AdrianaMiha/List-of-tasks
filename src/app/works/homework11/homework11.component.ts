import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework11',
  templateUrl: './homework11.component.html',
  styleUrls: ['./homework11.component.css']
})
export class Homework11Component implements OnInit {
  text: string;
  arrText: string[] = ["java", " tottenham",];
  allText: string = this.arrText.join() + ' ';
  allsText = "java" + " tottenham ";

  borderWrong = false;
  placeholder = "Word here...";

  area = '';
  areaPl = "Text here..."
  borderWrongPl = false;
  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.text) {
      this.arrText.push(this.text);
      this.allText = this.arrText.join() + ' ';
      this.allsText += this.text + " ";
      this.text = '';
      this.placeholder = "Word here...";
      this.borderWrong = false;
    }

    else if (!this.text) {
      this.borderWrong = true;
      this.placeholder = "Please write a word!";
    }
  }

  resetInput(): void {
    this.allsText = ''
    this.arrText = [];
    this.area = '';
  }

  censor() :void {
    if (!this.area) {
      this.areaPl = 'Please write a word!';
      this.borderWrongPl = true;
    }
    else {
      for (let i in this.arrText) {
        let stars: string = '*';
        for (let j = 0; j < this.arrText[i].length - 1; j++) {
          stars += '*'
        }
        let replace = new RegExp(this.arrText[i], 'g')
        let str: string = this.area;
        let newstr: string = str.replace(replace, stars);
        this.area = newstr;
      }
    }
  }

}
