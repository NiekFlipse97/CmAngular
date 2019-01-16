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

  controlCheck: ControlCheck;

  constructor(
    private service: ControlCheckService,
    private route: ActivatedRoute
  ) { }

  updateCheck(){
    alert("UPDATE")
  }

  deleteCheck(){
    // this.service.getChecks()
  }

  ngOnInit() {
    this.service.getControlCheck('5c3df52353ca125220988d2c').subscribe((result) => {
      this.controlCheck = result;
    });
  }

}
