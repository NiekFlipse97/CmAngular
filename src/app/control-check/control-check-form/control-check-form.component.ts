import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Variable } from '../../../models/Variable.model';
import { NoSqlStatementService } from '../../../services/NoSqlStatement.service';
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
        private nosqlstatementservice: NoSqlStatementService,
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
            varList.push(v);
        }
        query = this.nosqlstatementservice.createStatement(varList);

        this.controlCheckService.createControlCheck(this.controlCheckForm.value.title, this.controlCheckForm.value.description, JSON.parse(query));
    }
}
