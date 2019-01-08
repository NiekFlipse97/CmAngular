import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlCheckRoutingModule } from './control-check-routing.module';
import { ControlCheckComponent } from './control-check/control-check.component';
import { ControlCheckFormComponent } from './control-check-form/control-check-form.component';
import { ControlCheckDetailsComponent } from './control-check-details/control-check-details.component';

@NgModule({
  declarations: [
    ControlCheckComponent,
    ControlCheckFormComponent,
    ControlCheckDetailsComponent
  ],
  imports: [
    CommonModule,
    ControlCheckRoutingModule
  ]
})
export class ControlCheckModule { }
