import { Variable } from "../models/Variable.model";
import { Observable } from "rxjs";
import { AuthService } from '../app/components/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class noSqlStatementService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    public createStatement(variables: Variable[]) {
        var query: string = "{ ";

        for (var i = 0; i < variables.length; i++) {
            var variable: Variable = variables[i];
            var comparator: string = variable.comparator;

            query += ` "${variable.column}": ${variable.comparator.replace('@value', variable.value)}`;
            // switch(comparator){
            // case "equal":{
            //     query += variable.collumn + ': "' + variable.value + '",'
            //     break;
            // }
            // case "greater":{
            //     query += variable.collumn + ': $gt "' + variable.value + '",'
            //     break;
            // }
            // case "lesser":{
            //     query += variable.collumn + ': $lt "' + variable.value + '",'
            //     break;
            // }
            // case "greaterEqual":{
            //     query += variable.collumn + ': $gte "' + variable.value + '",'
            //     break;
            // }
            // case "lesserEqual":{
            //     query += variable.collumn + ': $lte "' + variable.value + '",'
            //     break;
            // }

            // }

        }

        console.log(query + "}");

        return query + "}";


    }
}