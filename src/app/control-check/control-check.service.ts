import { Injectable } from "@angular/core";
import { ControlCheck } from "./control-check-model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { config } from "src/assets/config";

@Injectable()
export class ControlCheckService {
    constructor(
        private http: HttpClient
    ) {}

    /**
     * Get a single ControlCheck by it's id.
     * @param id The id of the ControlCheck
     */
    getControlCheck(id : string) {
        return this.http.get<ControlCheck>(`${config.apiUrl}/api/checks/${id}`);
    }

    getChecks(): Observable<ControlCheck[]> {
        return this.http.get<ControlCheck[]>(`${config.apiUrl}/api/checks`);
    }
}