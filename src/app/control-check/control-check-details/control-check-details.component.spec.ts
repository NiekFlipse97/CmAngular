import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCheckDetailsComponent } from './control-check-details.component';

describe('ControlCheckDetailsComponent', () => {
  let component: ControlCheckDetailsComponent;
  let fixture: ComponentFixture<ControlCheckDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCheckDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheckDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
