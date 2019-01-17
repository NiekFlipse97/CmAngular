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
  alerts: Alert[] = [{
    merchantAmount: 1000,
    currency: 'USD',
    paymentMethod: 'IDEAL',
    buyerName: 'Frank',
    merchantName: 'Pete',
    organizationName: 'Avans',
    mcc: 123,
    createdOn: new Date('2019-08-09')
  }];

  // alerts: Alert[] = this.controlCheck.alerts;

  alertsAmount: number = this.alerts.length;

  constructor() { }

  ngOnInit() {
    console.log(this.check);
  }

}
