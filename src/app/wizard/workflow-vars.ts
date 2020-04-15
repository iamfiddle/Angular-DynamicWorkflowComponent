export interface StepPage { }

export class WorkflowGlobalVars {
    public static StepPageArray: StepPage[];
    public static FlowType: any;
}
export enum WorkFlowType{
    WizardFlow="WizardFlow",
    ButtonFlow="ButtonFlow"
}