import {Alert} from "../app/control-check/alert.model";

export class AlertCalculatorService {
    constructor() { }
    today:Date = new Date(Date.now());
    amount:number = 0;

    public dayOne(Alerts: Alert[]){
        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == this.today.getDay 
                && alert.createdOn.getMonth == this.today.getMonth
                && alert.createdOn.getFullYear == this.today.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayTwo(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 1)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayThree(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 2)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFour(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 3)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFive(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 4)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySix(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 5)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySeven(Alerts: Alert[]){
        let newDate:Date;
        newDate.setDate(this.today.getDate() - 6)

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDay == newDate.getDay 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }
}