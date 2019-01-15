import { Injectable } from "@angular/core";
import { ControlCheck } from "./control-check-model";

@Injectable()
export class ControlCheckService {
    constructor() {}

    /**
     * Get a single ControlCheck by it's id.
     * @param id The id of the ControlCheck
     */
    getControlCheck(id : number) : ControlCheck {
        return null;
    }
}