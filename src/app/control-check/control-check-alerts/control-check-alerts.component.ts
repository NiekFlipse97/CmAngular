import { Component, OnInit, Input } from '@angular/core';
import { ControlCheck } from '../control-check-model';
import { Alert } from '../alert.model';

@Component({
  selector: 'app-control-check-alerts',
  templateUrl: './control-check-alerts.component.html',
  styleUrls: ['./control-check-alerts.component.scss']
})
export class ControlCheckAlertsComponent implements OnInit {

  @Input() controlCheck: ControlCheck;
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

  alertsAmount: number = this.alerts.length;

  constructor() { }

  ngOnInit() {
  }

}
