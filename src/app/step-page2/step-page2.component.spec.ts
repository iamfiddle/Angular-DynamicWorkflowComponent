import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage2Component } from './step-page2.component';

describe('StepPage2Component', () => {
  let component: StepPage2Component;
  let fixture: ComponentFixture<StepPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
