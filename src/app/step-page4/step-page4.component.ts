import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-page4',
  templateUrl: './step-page4.component.html',
  styleUrls: ['./step-page4.component.scss']
})
export class StepPage4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SaveData(){
  console.log("Data Saving code will go here!");
  }
}
