import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../models/control-check-model';
import { ControlCheckService } from '../services/control-check.service';
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
  ) { }

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
