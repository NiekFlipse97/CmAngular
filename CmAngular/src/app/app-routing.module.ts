import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ControlCheckModule } from './control-check/control-check.module';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'control-checks', loadChildren:() => ControlCheckModule, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },

  { path: '**', redirectTo: '/home', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
