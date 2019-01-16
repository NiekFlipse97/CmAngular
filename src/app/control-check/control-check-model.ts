export class ControlCheck {
    _id?: string;
    title: string;
    description: string;
    condition: JSON;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}