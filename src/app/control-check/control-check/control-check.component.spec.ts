import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCheckComponent } from './control-check.component';

describe('ControlCheckComponent', () => {
  let component: ControlCheckComponent;
  let fixture: ComponentFixture<ControlCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
