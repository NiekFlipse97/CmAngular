import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../models/control-check-model';
import { ControlCheckService } from '../services/control-check.service';
import { ActivatedRoute } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { AlertCalculatorService } from '../../../services/alert-calculator.service';
import { Alert } from '../models/alert.model';
import { Input } from '@angular/core';


@Component({
  selector: 'app-control-check-details',
  templateUrl: './control-check-details.component.html',
  styleUrls: ['./control-check-details.component.scss']
})

export class ControlCheckDetailsComponent implements OnInit {
  
@Input() check: ControlCheck;
  
  alerts: Alert[] = [];
  dataSource: Object;
  chartConfig: Object;
  controlCheck: ControlCheck;
  today: Date = new Date(Date.now());
  
  
  constructor(
    private service: ControlCheckService,
    private route: ActivatedRoute,
    private alertCalculatorservice: AlertCalculatorService
  ){
    this.chartConfig = {
      width: '500',
      height: '300',
      type: 'column2d',
      dataFormat: 'json',
    };

    this.loadGraphWithDate()
  }

  updateCheck() {
    alert('UPDATE');
  }

  deleteCheck() {
    this.service.deleteControlCheck(this.controlCheck);
  }

  ngOnInit() {
  

      this.getInfo();
    
  }

  getInfo(){
    this.service.getControlCheck(this.route.snapshot.paramMap.get('id')).subscribe((result: ControlCheck) => {
      this.controlCheck = result;
      this.alerts = result.alerts;
      this.loadGraphWithDate();
      console.log("updated the alert")
      setTimeout(() => {this.getInfo()}, 5000)
    });
  }

  loadGraphWithDate(){
    this.dataSource = {
      "chart": {
        "caption": "the amount of failed checks of the last week",
        "xAxisName": "day",
        "yAxisName": "failed checks",
        "numberSuffix": " checks",
        "theme": "fusion",
      },
      "data": [{
        "label": this.alertCalculatorservice.getdate(6),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 6)
      }, {
        "label": this.alertCalculatorservice.getdate(5),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 5)
      }, {
        "label": this.alertCalculatorservice.getdate(4),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 4)
      }, {
        "label": this.alertCalculatorservice.getdate(3),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 3)
      }, {
        "label": this.alertCalculatorservice.getdate(2),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 2)
      }, {
        "label": this.alertCalculatorservice.getdate(1),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 1)
      }, 
      {
        "label": this.today.toDateString(),
        "value": this.alertCalculatorservice.calculateAmountOfAlertOnDay(this.alerts, 0)
      }]

    };
    
    //setTimeout(() => {this.loadGraphWithDate()}, 5000)
  }
}
