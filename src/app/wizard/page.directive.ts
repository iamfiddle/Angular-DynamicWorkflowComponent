import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pageDirective]'
})

export class PageDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
