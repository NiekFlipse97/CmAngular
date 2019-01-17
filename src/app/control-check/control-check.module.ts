import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlCheckRoutingModule } from './control-check-routing.module';
import { ControlCheckComponent } from './control-check/control-check.component';
import { ControlCheckFormComponent } from './control-check-form/control-check-form.component';
import { ControlCheckDetailsComponent } from './control-check-details/control-check-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlCheckAlertsComponent } from './control-check-alerts/control-check-alerts.component';
import { AlertCalculatorService } from '../../services/alert-calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme)

@NgModule({
  declarations: [
    ControlCheckComponent,
    ControlCheckFormComponent,
    ControlCheckDetailsComponent,
    ControlCheckAlertsComponent
  ],
  imports: [
    CommonModule,
    ControlCheckRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FusionChartsModule,
  ],
  providers: [AlertCalculatorService
  ],
  bootstrap: [ ControlCheckDetailsComponent ]
})
export class ControlCheckModule { }
