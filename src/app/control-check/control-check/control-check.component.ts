import { Component, OnInit } from '@angular/core';
import { ControlCheck } from '../control-check-model';
import { ControlCheckService } from '../control-check.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-control-check',
  templateUrl: './control-check.component.html',
  styleUrls: ['./control-check.component.scss']
})
export class ControlCheckComponent implements OnInit {

  controlChecks: ControlCheck[] = [{
    _id: 0,
    title: "one",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  },
  {
    _id: 1,
    title: "two",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  },
  {
    _id: 2,
    title: "three",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  },
  {
    _id: 3,
    title: "four",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  },
  {
    _id: 4,
    title: "five",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  },
  {
    _id: 5,
    title: "six",
    description: "Date and time pickers provide the ability to select a single or a range ofdates and times."
  }];

  controlChecks$: Observable<ControlCheck[]>;

  constructor(
    private controlCheckService: ControlCheckService
  ) { }

  ngOnInit() {
    this.controlChecks$ = this.controlCheckService.getChecks();
  }

}
