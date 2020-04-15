import { Component, OnInit, ViewChild, Input, ViewContainerRef } from '@angular/core';
import { StepPage } from '../workflow-vars';
import { WorkflowGlobalVars } from '../workflow-vars';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.scss']
})
export class WizardStepperComponent implements OnInit {

  @ViewChild('stepper') totalStepsCount: number;
  public steps: StepPage[];
  flowType: string;
  buttonFlowPageIndex: Number;

  //Getter-Setter for page Index: used in ButtonFlow
  private gIndex: number = 0;
  get globalIndex(): number {
    return this.gIndex;
  }
  set globalIndex(value: number) {
    this.gIndex = value;
  }
  
  constructor() {

    this.steps = WorkflowGlobalVars.StepPageArray;
    this.buttonFlowPageIndex = this.globalIndex;
  }
  public ngOnInit(): void {    
    this.flowType = WorkflowGlobalVars.FlowType;
    //console.log("Printing Enum: " + WorkflowGlobalVars.FlowType);
    //console.log(WorkflowGlobalVars.StepPageArray);
  }

  //Next-Previous functionality:used in ButtonFlow
  public goBack(): void {
    //stepper.previous();
    this.globalIndex--;
    this.buttonFlowPageIndex = this.globalIndex;

  }
  public goForward(): void {
    //stepper.selectedIndex += 1;
    this.globalIndex++;
    this.buttonFlowPageIndex = this.globalIndex;
  }
}