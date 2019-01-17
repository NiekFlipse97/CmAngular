import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../control-check-model';
import { ControlCheckService } from '../control-check.service';
import { ActivatedRoute } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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
    private route: ActivatedRoute
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
          "value": "2"
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
    this.service.getControlCheck(this.route.snapshot.paramMap.get('id')).subscribe((result) => {
      this.controlCheck = result;
        });
      }
    }
