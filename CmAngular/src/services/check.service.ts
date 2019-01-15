import { Variable } from "../models/Variable.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControlCheck } from "src/app/control-check/control-check-model";
import { config } from "src/assets/config";

@Injectable({
    providedIn: 'root'
})

export class CheckService {

    constructor(private http: HttpClient) { }

    public getChecks() {
        this.http.get(`${config.apiUrl}/api/checks`).subscribe(check => console.log(check))
    }

    public deleteCheck(check: ControlCheck) {
        this.http.delete(`${config.apiUrl}/api/checks/${check._id}`)
    }
}