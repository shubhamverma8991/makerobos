import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchAllOptionComponent } from './catch-all-option.component';

describe('CatchAllOptionComponent', () => {
  let component: CatchAllOptionComponent;
  let fixture: ComponentFixture<CatchAllOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchAllOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchAllOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
