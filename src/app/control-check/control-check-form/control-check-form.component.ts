import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Variable } from '../../../models/Variable.model';
import { noSqlStatementService } from '../../../services/noSqlStatement.service';
import { ControlCheckService } from '../control-check.service';

@Component({
    selector: 'app-control-check-form',
    templateUrl: './control-check-form.component.html',
    styleUrls: ['./control-check-form.component.scss']
})
export class ControlCheckFormComponent implements OnInit {
    controlCheckForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private nosqlstatementservice: noSqlStatementService,
        private controlCheckService: ControlCheckService
    ) { }

    ngOnInit() {
        this.controlCheckForm = this.fb.group({
            title: [''],
            description: [''],
            variables: this.fb.array([
                this.initVariable(),
            ])
        })
    }

    initVariable() {
        return this.fb.group({
            column: [''],
            comparator: [''],
            value: [''],
            ORStatements: this.fb.array([
                this.initOR(),
            ])
        });
    }

    initOR() {
        return this.fb.group({
            column: [''],
            comparator: [''],
            value: [''],
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

    addOR(j) {
        console.log(j);
        // const control = <FormArray>this.controlCheckForm.get('variables').controls[j].get('ORStatements');
        // control.push(this.initOR());
    }

    // save() {
    //     if (this.controlCheckForm.valid && this.variables != null) {
    //         console.log('onSubmit');
    //         let varList: Variable[];
    //         let query;

    //         for (var i = 0; i < this.variables.length; i++) {
    //             let formGroupOfVariable = this.variables[i];
    //             var v = new Variable({ column: formGroupOfVariable.column, comparator: formGroupOfVariable.comparator, value: formGroupOfVariable.value });
    //             varList.push(v);
    //         }
    //         query = this.nosqlstatementservice.createStatement(varList);
    //         console.log(query);
    //     } else {
    //         console.log('onSubmit failed');
    //     }
    // }

    setColumnValue(targetValue, variable: FormGroup) {
        variable.controls.column.setValue(targetValue);
    }

    setComparator(targetValue, variable: FormGroup) {
        variable.controls.comparator.setValue(targetValue);
    }

    setInputField(targetValue, variable: FormGroup) {
        variable.controls.value.setValue(targetValue);
    }

    save() {
        let varList: Variable[] = [];
        let query;

        for (let variable of this.variables.value) {

            let v = new Variable(variable);
            
            // let formGroupOfVariable = this.variables[0] as FormGroup;
            // console.log('FormGroupOfVariable ', formGroupOfVariable);
            // var v = new Variable({ column: formGroupOfVariable.controls.column, comparator: formGroupOfVariable.controls.comparator, value: formGroupOfVariable.controls.value });
            varList.push(v);
        }
        query = this.nosqlstatementservice.createStatement(varList);

        this.controlCheckService.createControlCheck(this.controlCheckForm.value.title, this.controlCheckForm.value.description, JSON.parse(query));
    }
}
