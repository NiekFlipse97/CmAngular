import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/auth-guard.service';
import { ControlCheckModule } from './control-check/control-check.module';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/control-checks', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'control-checks', loadChildren:() => ControlCheckModule, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },

  { path: '**', redirectTo: '/control-checks', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
