import { Variable } from "../models/Variable.model";
import { Injectable } from '@angular/core';
import { isString } from "util";

@Injectable({
    providedIn: 'root'
})
export class NoSqlBuilderService {

    constructor() { }

    private addQuotesIfString(value) {
        if (isString(value)) {
            return `"${value}"`;
        }

        return value;
    }

    public createStatement(variables: Variable[]) {
        var query: string = "{ ";

        for (var i = 0; i < variables.length; i++) {
            var variable: Variable = variables[i];

            if (variables.length - 1 === i) {
                query += `"${variable.column}": ${variable.comparator.replace('@value', this.addQuotesIfString(variable.value))}`;
            } else {
                query += `"${variable.column}": ${variable.comparator.replace('@value', this.addQuotesIfString(variable.value))}, `;
            }
        }

        return query + "}";
    }
}