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
            console.log("alert: "+ alert.createdOn.toDateString() +", today: "+ this.today.toDateString() );
            if(alert.createdOn.toDateString() == this.today.toDateString()){
                    this.amount += 1;
                    console.log("alert: "+ alert.createdOn.toDateString() +", today: "+ this.today.toDateString() );

            }
            return this.amount;
        }
    }

    public dayTwo(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-1;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayThree(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-2;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFour(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-3;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public dayFive(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-4;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySix(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-5;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public daySeven(Alerts: Alert[]){
        let now = new Date(Date.now());
        let day = this.today.getDate()-6;
        now.setDate(day);


        if(Alerts == null){
            return 0;
        }

        for(var i = 0; i <  Alerts.length; i++){
            let alert = Alerts[i];
            if(alert.createdOn.getDate== now.getDate 
                && alert.createdOn.getMonth == now.getMonth
                && alert.createdOn.getFullYear == now.getFullYear){
                    this.amount += 1;
            }
            return this.amount;
        }
    }

    public getdate(days: number){
        let now = new Date(Date.now());
        let day = this.today.getDate()-days;
        now.setDate(day);
        return now.toDateString();
    }
}