import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage4Component } from './step-page4.component';

describe('StepPage4Component', () => {
  let component: StepPage4Component;
  let fixture: ComponentFixture<StepPage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
