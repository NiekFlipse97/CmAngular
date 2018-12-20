import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlCheckRoutingModule } from './control-check-routing.module';
import { ControlCheckComponent } from './control-check/control-check.component';

@NgModule({
  declarations: [ControlCheckComponent],
  imports: [
    CommonModule,
    ControlCheckRoutingModule
  ]
})
export class ControlCheckModule { }
