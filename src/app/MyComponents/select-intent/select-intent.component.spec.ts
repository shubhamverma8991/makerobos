import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIntentComponent } from './select-intent.component';

describe('SelectIntentComponent', () => {
  let component: SelectIntentComponent;
  let fixture: ComponentFixture<SelectIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
