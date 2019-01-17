import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Variable } from '../../../models/Variable.model';
import { ControlCheckService } from '../control-check.service';
import { NoSqlBuilderService } from 'src/services/no-sql-builder.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-control-check-form',
    templateUrl: './control-check-form.component.html',
    styleUrls: ['./control-check-form.component.scss']
})
export class ControlCheckFormComponent implements OnInit {
    controlCheckForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private nosqlstatementservice: NoSqlBuilderService,
        private controlCheckService: ControlCheckService,
        private route: Router
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
            ORStatements: this.fb.array([])
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
        console.log(this.controlCheckForm)
    }

    addOR(index) {
        const control = <FormArray>this.variables.controls[index].get('ORStatements');
        control.push(this.initOR());
        console.log(this.controlCheckForm);
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

    onSubmit() {
        let varList: Variable[] = [];
        let query = '';

        for (let variable of this.variables.value) {
            let v = new Variable(variable);
            varList.push(v);
        }
        query = this.nosqlstatementservice.createStatement(varList);

        console.log(query);
        this.controlCheckService.createControlCheck(this.controlCheckForm.value.title, this.controlCheckForm.value.description, JSON.parse(query))
            .subscribe((response) => {
                if (response) {
                    console.log(response);
                    varList = [];
                    query = '';
                    this.route.navigate(['..']);
                }
            });
    }
}
