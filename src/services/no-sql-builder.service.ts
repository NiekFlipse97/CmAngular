import { Variable } from "../models/Variable.model";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NoSqlBuilderService {

    constructor() { }

    public createStatement(variables: Variable[]) {
        var query: string = "{ ";

        for (var i = 0; i < variables.length; i++) {
            var variable: Variable = variables[i];

            if (variables.length - 1 === i) {
                query += `"${variable.column}": ${variable.comparator.replace('@value', variable.value)}`;
            } else {
                query += `"${variable.column}": ${variable.comparator.replace('@value', variable.value)}, `;
            }
        }

        return query + "}";
    }
}