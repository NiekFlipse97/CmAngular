import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';

import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ControlCheckModule } from './control-check/control-check.module';
import { ControlCheckService } from './control-check/control-check.service';
import { HttpInterceptor } from './shared/http.interceptor';
import { NoSqlStatementService } from 'src/services/NoSqlStatement.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ControlCheckModule
  ],
  providers: [AuthService, AuthGuard, ControlCheckService, NoSqlStatementService, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
