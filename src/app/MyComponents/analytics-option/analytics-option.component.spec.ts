import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsOptionComponent } from './analytics-option.component';

describe('AnalyticsOptionComponent', () => {
  let component: AnalyticsOptionComponent;
  let fixture: ComponentFixture<AnalyticsOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
