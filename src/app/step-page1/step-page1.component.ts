import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DataShareService } from '../DataService/data-share.service';

@Component({
  selector: 'app-step-page1',
  templateUrl: './step-page1.component.html',
  styleUrls: ['./step-page1.component.scss']
})
export class StepPage1Component implements OnChanges {

  @Input() uName: string;
  constructor(private data: DataShareService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`SimpleChanges: +${changes}`);
  }

  valuechange(et) {

    console.log(et);
    console.log(et.target);

    this.data.data2 = et.data;
    console.log(this.data.data2);
  }
}