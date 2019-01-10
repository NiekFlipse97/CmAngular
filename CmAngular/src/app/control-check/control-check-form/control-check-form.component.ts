import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Check} from '../../../models/Check.model';
import {Variable} from '../../../models/Variable.model';
import {noSqlStatementService} from '../../../services/noSqlStatement.service';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';
//import {checkService} from '../../../services/check.service';

@Component({
  selector: 'app-control-check-form',
  templateUrl: './control-check-form.component.html',
  styleUrls: ['./control-check-form.component.scss']
})
export class ControlCheckFormComponent implements OnInit {
  controlCheckForm: FormGroup;
  constructor(private fb: FormBuilder, private noslqstatementservice: noSqlStatementService) { }

  ngOnInit() {

  this.controlCheckForm = this.fb.group({
    title: [''],
    description: [''],
    variables: this.fb.array([
      this.initVariable(),
    ])
  })

  console.log('onInit');
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

  get variables() {
    return this.controlCheckForm.get('variables') as FormArray;
  }

  get ORs() {
    return this.variables.get('ORStatements') as FormArray;
}

  addVariable() {
    const control = <FormArray>this.controlCheckForm.get('variables');
    control.push(this.initVariable());
  }
  addOR(j){
    console.log(j);
    // const control = <FormArray>this.controlCheckForm.get('variables').controls[j].get('ORStatements');
    // control.push(this.initOR());
  }




  save(){
    if(this.controlCheckForm.valid && this.variables != null){
      console.log('onSubmit');
      let varList:Variable[];
      let query;

      for(var i = 0; i< this.variables.length; i++){
        var v= new Variable({value1: this.variables[1].value1, value2: this.variables[1].value1, comparator: this.variables[1].comparator});
        varList.push(v);
      }
     query =  this.noslqstatementservice.createStatement(varList);
      console.log(query);
    }else{
      console.log('onSubmit failed');
    }
    

    
  }
}
