import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-control-check-form',
  templateUrl: './control-check-form.component.html',
  styleUrls: ['./control-check-form.component.scss']
})
export class ControlCheckFormComponent implements OnInit {

  controlCheckForm = this.fb.group({
    title: [''],
    description: [''],
    variables: this.fb.array([
      this.initVariable(),
    ])

  })

  get variables() {
    return this.controlCheckForm.get('variables') as FormArray;
  }

  initVariable(){
    return new FormGroup({
      value1: new FormControl(''),
      comparator: new FormControl(''),
      value2: new FormControl(''),
      or: this.fb.array([
        this.initOR(),
      ])
    });
   }
  initOR(){
   return new FormGroup({
    value1: new FormControl(''),
    comparator: new FormControl(''),
    value2: new FormControl(''),});
  get ORs() {
    return this.controlCheckForm.get('ORStatements') as FormArray;
  }

  initVariable(){
   return new FormGroup({
    value1: new FormControl(''),
    comparator: new FormControl(''),
    value2: new FormControl(''),
    ORStatements:new FormArray([
      this.initOR(),
    ])
   });
  }

  initOR() {
    return new FormGroup({
      value1: new FormControl(''),
      comparator: new FormControl(''),
      value2: new FormControl(''),
    });
  }

  addVariable() {
    this.variables.push(this.initVariable());
  }
  addOR(){
    this.ORs.push(this.initOR());
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('onSubmit');
  }

}
