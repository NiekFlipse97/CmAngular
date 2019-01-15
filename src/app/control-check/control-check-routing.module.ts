import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlCheckComponent } from './control-check/control-check.component';
import { ControlCheckFormComponent } from './control-check-form/control-check-form.component';
import { ControlCheckDetailsComponent } from './control-check-details/control-check-details.component';

const routes: Routes = [
  { path: '', component: ControlCheckComponent },
  { path: 'add', component: ControlCheckFormComponent },
  { path: 'details/:id', component: ControlCheckDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlCheckRoutingModule { }
