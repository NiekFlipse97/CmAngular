import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../models/control-check-model';
import { ControlCheckService } from '../services/control-check.service';
import { ActivatedRoute } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { AlertCalculatorService } from '../../../services/alert-calculator.service';
import { Alert } from '../alert.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-control-check-details',
  templateUrl: './control-check-details.component.html',
  styleUrls: ['./control-check-details.component.scss']
})

export class ControlCheckDetailsComponent implements OnInit {
  dataSource: Object;
  chartConfig: Object;
  controlCheck: ControlCheck;

  constructor(
    private service: ControlCheckService,
    private route: ActivatedRoute,
    private alertCalculatorservice: AlertCalculatorService
  ){
    this.chartConfig = {
      width: '450',
      height: '300',
      type: 'column2d',
      dataFormat: 'json',};
      
      this.dataSource = {
        "chart": {
          "caption": "the amount of failed checks of the last week",
          "xAxisName": "day",
          "yAxisName": "failed checks",
          "numberSuffix": " checks",
          "theme": "fusion",
        },
        "data": [{
          "label": "7 day ago",
          "value": alertCalculatorservice.daySeven()
        }, {
          "label": "6 day ago",
          "value": "3"
        }, {
          "label": "5 day ago",
          "value": "4"
        }, {
          "label": "4 day ago",
          "value": "8"
        }, {
          "label": "3 day ago",
          "value": "2"
        }, {
          "label": "yesterday",
          "value": "1"
        }, {
          "label": "today",
          "value": "3"
        }]
      };
  }

  updateCheck() {
    alert('UPDATE');
  }

  deleteCheck() {
    this.service.deleteControlCheck(this.controlCheck);
  }

  ngOnInit() {
    this.service.getControlCheck(this.route.snapshot.paramMap.get('id')).subscribe((result: ControlCheck) => {
      this.controlCheck = result;
    });

    this.chartConfig = {
      width: '450',
      height: '300',
      type: 'column2d',
      dataFormat: 'json',
    };

    this.dataSource = {
      "chart": {
        "caption": "the amount of failed checks of the last week",
        "xAxisName": "day",
        "yAxisName": "failed checks",
        "numberSuffix": " checks",
        "theme": "fusion",
      },
      "data": [{
        "label": "7 day ago",
        "value": "290"
      }, {
        "label": "6 day ago",
        "value": "260"
      }, {
        "label": "5 day ago",
        "value": "180"
      }, {
        "label": "4 day ago",
        "value": "140"
      }, {
        "label": "3 day ago",
        "value": "115"
      }, {
        "label": "yesterday",
        "value": "100"
      }, {
        "label": "today",
        "value": "30"
      }]
    };
  }
}
