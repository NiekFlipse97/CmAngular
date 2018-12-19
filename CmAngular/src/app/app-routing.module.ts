import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ControlCheckFormComponent } from './components/control-check-form/control-check-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'controlcheck/add', component: ControlCheckFormComponent },
  
  { path: '**', redirectTo: '/home' }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
