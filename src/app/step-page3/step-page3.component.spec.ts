import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage3Component } from './step-page3.component';

describe('StepPage3Component', () => {
  let component: StepPage3Component;
  let fixture: ComponentFixture<StepPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
