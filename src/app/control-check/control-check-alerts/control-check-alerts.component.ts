import { Component, OnInit, Input } from '@angular/core';
import { ControlCheck } from '../models/control-check-model';
import { Alert } from '../models/alert.model';

@Component({
  selector: 'app-control-check-alerts',
  templateUrl: './control-check-alerts.component.html',
  styleUrls: ['./control-check-alerts.component.scss']
})
export class ControlCheckAlertsComponent implements OnInit {

  @Input() check: ControlCheck;
  
  alerts: Alert[];

  alertsAmount: number;

  constructor() { }

  ngOnInit() {
    this.alerts = this.check.alerts;
    this.alertsAmount = this.alerts.length;
  }

}
