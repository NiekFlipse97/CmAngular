import { Injectable } from "@angular/core";
import { ControlCheck } from "./control-check-model";
import { HttpClient } from "@angular/common/http";
import { config } from "src/assets/config";
import { Observable } from "rxjs";

@Injectable()
export class ControlCheckService {
    constructor(
        private http: HttpClient
    ) {}

    /**
     * Get a single ControlCheck by it's id.
     * @param id The id of the ControlCheck
     */
    getControlCheck(id : number) : ControlCheck {
        return null;
    }

    getChecks(): Observable<ControlCheck[]> {
        return this.http.get<ControlCheck[]>(`${config.apiUrl}/api/checks`);
    }

    deleteCheck(check: ControlCheck) {
        this.http.delete(`${config.apiUrl}/api/checks/${check._id}`)
    }
}