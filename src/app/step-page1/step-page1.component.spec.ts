import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPage1Component } from './step-page1.component';

describe('StepPage1Component', () => {
  let component: StepPage1Component;
  let fixture: ComponentFixture<StepPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
