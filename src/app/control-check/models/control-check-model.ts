import { Alert } from './alert.model';

export class ControlCheck {
    _id?: string;
    name: string;
    description: string;
    condition: JSON;
    alerts: Alert[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
