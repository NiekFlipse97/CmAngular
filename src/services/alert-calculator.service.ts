import {Alert} from "../app/control-check/models/alert.model";

export class AlertCalculatorService {
    constructor() { }
    today:Date = new Date(Date.now());
    amount:number = 0;

    public dayOne(Alerts: Alert[]){
        console.log(this.today.toDateString())
        if(Alerts == null){
            return this.amount;
        }
        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == this.today.getDate 
                && alert.createdOn.getMonth == this.today.getMonth
                && alert.createdOn.getFullYear == this.today.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayTwo(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-1;
        newDate.setDate(day);

        if(Alerts == null){
            return this.amount;
        }
        
        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == newDate.getDate 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayThree(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-2;
        newDate.setDate(day);


        if(Alerts == null){
            return this.amount;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == newDate.getDate
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFour(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-3;
        newDate.setDate(day);


        if(Alerts == null){
            return this.amount;
        }

        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == newDate.getDate
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFive(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-4;
        newDate.setDate(day);


        if(Alerts == null){
            return this.amount;
        }

        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == newDate.getDate 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySix(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-5;
        newDate.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate == newDate.getDate 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySeven(Alerts: Alert[]){
        let newDate:Date = this.today;
        let day = this.today.getDate()-6;
        newDate.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== newDate.getDate 
                && alert.createdOn.getMonth == newDate.getMonth
                && alert.createdOn.getFullYear == newDate.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public getdate(days: number){
        let newDate:Date = this.today;
        let day = this.today.getDate()-days;
        newDate.setDate(day);
        return newDate.toDateString();
    }
}