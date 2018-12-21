import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlCheckComponent } from './control-check/control-check.component';
import { ControlCheckFormComponent } from './control-check-form/control-check-form.component';

const routes: Routes = [
  { path: '', component: ControlCheckComponent },
  { path: 'add', component: ControlCheckFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlCheckRoutingModule { }
