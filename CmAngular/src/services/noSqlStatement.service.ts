import { Variable } from "../models/Variable.model";
import { Observable } from "rxjs";
import { AuthService } from '../app/components/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class noSqlStatementService{

    constructor(private http: HttpClient, private auth: AuthService) { }

    public createStatement(variables: Variable[]){
        var query:string ="{ ";

        for( var i = 0; i< variables.length; i++){
            var variable: Variable = variables[i];
            var comparator:string = variable.comparator;


            switch(comparator){
            case "equal":{
                query += variable.value1 + ': "' + variable.value2 + '",'
                break;
            }
            case "greater":{
                query += variable.value1 + ': $gt "' + variable.value2 + '",'
                break;
            }
            case "lesser":{
                query += variable.value1 + ': $lt "' + variable.value2 + '",'
                break;
            }
            case "greaterEqual":{
                query += variable.value1 + ': $gte "' + variable.value2 + '",'
                break;
            }
            case "lesserEqual":{
                query += variable.value1 + ': $lte "' + variable.value2 + '",'
                break;
            }

        }
            
        }

        return query + "}";
 
        
    }
}