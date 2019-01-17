import { Injectable } from "@angular/core";
import { ControlCheck } from "./control-check-model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { config } from "src/assets/config";
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ControlCheckService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get a single ControlCheck by it's id.
     * @param id The id of the ControlCheck
     */
    getControlCheck(id: string) {
        return this.http.get<ControlCheck>(`${config.apiUrl}/api/checks/${id}`);
    }

    /**
     * Get all the checks
     */
    getChecks(): Observable<ControlCheck[]> {
        return this.http.get<ControlCheck[]>(`${config.apiUrl}/api/checks`);
    }

    /**
     * This function creates a controlcheck.
     * @param name The name of the check
     * @param description The description of the check
     * @param condition The nosql query to execute the check
     */
    createControlCheck(name: string, description: string, condition: string): Observable<any> {
        let newControl = new ControlCheck({ name, description, condition });

        return this.http.post<any>(`${config.apiUrl}/api/checks`, newControl)
            .pipe(
                catchError(val => of(val)
            ));
    }

    deleteControlCheck(check: ControlCheck) {
        this.http.delete<any>(`${config.apiUrl}/api/checks/${check._id}`).subscribe(console.log);
    }
}
