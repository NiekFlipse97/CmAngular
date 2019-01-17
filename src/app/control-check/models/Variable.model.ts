export class Variable {
    column: string;
    comparator: string;
    value: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}