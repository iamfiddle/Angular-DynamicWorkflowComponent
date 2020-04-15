import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WizardStepperComponent } from './wizard/wizard-stepper/wizard-stepper.component';
import { StepPageWrapperComponent } from './wizard/step-page-wrapper/step-page-wrapper.component';
import { PageDirective } from './wizard/page.directive';
import { WorkflowGlobalVars } from './wizard/workflow-vars';
import { StepPage1Component } from './step-page1/step-page1.component';
import { StepPage2Component } from './step-page2/step-page2.component';
import { StepPage3Component } from './step-page3/step-page3.component';
import { StepPage4Component } from './step-page4/step-page4.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardStepperComponent,
    StepPage1Component,
    StepPage2Component,
    StepPage3Component,
    PageDirective,
    StepPageWrapperComponent,
    StepPage4Component
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,  
    MatStepperModule,

    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,    
    ReactiveFormsModule
    
  ],
  //Need to register Services and class under provider
  providers: [WorkflowGlobalVars],
  bootstrap: [AppComponent],
  entryComponents: [
    StepPage1Component,
    StepPage2Component,
    StepPage3Component,
    StepPage4Component,
    StepPageWrapperComponent
  ]  
})
export class AppModule { }