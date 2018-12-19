import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlCheckFormComponent } from './components/control-check-form/control-check-form.component';

const routes: Routes = [
  {path: 'controlcheck/add', component: ControlCheckFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
