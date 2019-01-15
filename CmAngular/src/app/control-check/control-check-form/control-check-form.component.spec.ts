import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCheckFormComponent } from './control-check-form.component';

describe('ControlCheckFormComponent', () => {
  let component: ControlCheckFormComponent;
  let fixture: ComponentFixture<ControlCheckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCheckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
