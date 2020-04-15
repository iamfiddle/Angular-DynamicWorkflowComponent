import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PageDirective } from '../page.directive';

@Component({
  selector: 'app-step-page-wrapper',
  template: '<ng-template pageDirective></ng-template>',
})
export class StepPageWrapperComponent implements OnInit {

  @Input() item?: any;
  @ViewChild(PageDirective) pageHost: PageDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.item == undefined) {
      console.error('Item undefined');
      return
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item);
    const viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}