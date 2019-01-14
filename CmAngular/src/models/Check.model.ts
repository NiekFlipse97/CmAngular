export class Check {
    _id: string;
    title: string;
    description: string;
    noSqlStatement: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}