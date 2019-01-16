import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../control-check-model';
import { ControlCheckService } from '../control-check.service';

@Component({
  selector: 'app-control-check-details',
  templateUrl: './control-check-details.component.html',
  styleUrls: ['./control-check-details.component.scss']
})

export class ControlCheckDetailsComponent implements OnInit {

  controlCheck: ControlCheck = {
    _id: 0,
    title: "Number 0",
    description: "Testing"
  }

  constructor(
    private service: ControlCheckService
  ) { }

  updateCheck(){
    alert("UPDATE")
  }

  deleteCheck(){
    this.service.getChecks()
  }

  ngOnInit() {
  }

}
