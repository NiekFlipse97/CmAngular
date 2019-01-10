export class Variable {
    value1: string;
    comparator: string;
    value2: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}