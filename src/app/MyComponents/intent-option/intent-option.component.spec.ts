import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentOptionComponent } from './intent-option.component';

describe('IntentOptionComponent', () => {
  let component: IntentOptionComponent;
  let fixture: ComponentFixture<IntentOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
