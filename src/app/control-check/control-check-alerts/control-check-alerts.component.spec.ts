import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCheckAlertsComponent } from './control-check-alerts.component';

describe('ControlCheckAlertsComponent', () => {
  let component: ControlCheckAlertsComponent;
  let fixture: ComponentFixture<ControlCheckAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCheckAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheckAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
