import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    return new FormGroup({});
   }
  initOR(){
   return new FormGroup({});
  }

  addVariable() {
    this.variables.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('onSubmit');
  }

}
