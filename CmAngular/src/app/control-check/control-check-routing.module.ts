import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlCheckComponent } from './control-check/control-check.component';

const routes: Routes = [
  { path: '', component: ControlCheckComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlCheckRoutingModule { }
