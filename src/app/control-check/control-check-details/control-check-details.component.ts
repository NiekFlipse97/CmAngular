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
