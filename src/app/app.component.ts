import { Component } from '@angular/core';
import { WorkflowGlobalVars, WorkFlowType } from './wizard/workflow-vars';
import { StepPage1Component } from './step-page1/step-page1.component';
import { StepPage2Component } from './step-page2/step-page2.component';
import { StepPage3Component } from './step-page3/step-page3.component';
import { StepPage4Component } from './step-page4/step-page4.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Implementer Component';

  constructor() {
    
    //Worflow Control variable assignment
    WorkflowGlobalVars.StepPageArray = [StepPage1Component, StepPage2Component, StepPage3Component, StepPage4Component];
    WorkflowGlobalVars.FlowType=WorkFlowType.ButtonFlow;
  }
}