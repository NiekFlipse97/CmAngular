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

  get ORs() {
    return this.controlCheckForm.get('ORStatements') as FormArray;
}

  initVariable(){
    return this.fb.group({
    value1: [''],
    comparator: [''],
    value2: [''],
    ORStatements: this.fb.array([
      this.initOR(),
    ])
   });
  }

  initOR() {
    return this.fb.group({
      value1: [''],
      comparator: [''],
      value2: [''],
    });
  }

  addVariable() {
    const control = <FormArray>this.controlCheckForm.get('variables');
    control.push(this.initVariable());
  }
  addOR(j){
    console.log(j);
    //const control = <FormArray>this.controlCheckForm.get('variables').controls[j].get('ORStatements');
    //control.push(this.initOR());
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('onSubmit');
  }

}
