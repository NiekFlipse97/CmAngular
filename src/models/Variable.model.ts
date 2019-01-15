export class Variable {
    collumn: string;
    comparator: string;
    value: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}