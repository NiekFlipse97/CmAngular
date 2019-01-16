import { Variable } from "../models/Variable.model";
import { AuthService } from '../app/components/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NoSqlBuilderService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    public createStatement(variables: Variable[]) {
        var query: string = "{ ";

        for (var i = 0; i < variables.length; i++) {
            var variable: Variable = variables[i];
            var comparator: string = variable.comparator;

            query += ` "${variable.column}": ${variable.comparator.replace('@value', variable.value)}`;
        }

        return query + "}";
    }
}