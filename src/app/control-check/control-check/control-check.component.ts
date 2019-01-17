import { Component, OnInit } from '@angular/core';
import { ControlCheckService } from '../services/control-check.service';
import { Observable } from 'rxjs';
import { ControlCheck } from '../models/control-check-model';

@Component({
  selector: 'app-control-check',
  templateUrl: './control-check.component.html',
  styleUrls: ['./control-check.component.scss']
})
export class ControlCheckComponent implements OnInit {
  controlChecks$: Observable<ControlCheck[]>;

  constructor(
    private controlCheckService: ControlCheckService
  ) { }

  ngOnInit() {
    this.controlChecks$ = this.controlCheckService.getChecks();
  }

}
