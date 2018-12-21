import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-control-check-form',
  templateUrl: './control-check-form.component.html',
  styleUrls: ['./control-check-form.component.scss']
})
export class ControlCheckFormComponent implements OnInit {

  controlCheckForm = this.fb.group({
    datatype: [''],
    comparator: [''],
    value: [''],
    variables: this.fb.array([
      this.fb.control('')
    ])

  })

  get variables() {
    return this.controlCheckForm.get('variables') as FormArray;
  }

  addVariable() {
    this.variables.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log('onSubmit');
  }

}
