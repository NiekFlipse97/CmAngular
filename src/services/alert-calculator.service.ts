import {Alert} from "../app/control-check/models/alert.model";

export class AlertCalculatorService {
    constructor() { }
    today:Date = new Date(Date.now());
    amount:number = 0;

    public calculateAmountOfAlertOnDay(alerts: Alert[], subtractedDays: number): number{
        //if(alerts == null) return 0;
        let compareDate = new Date(Date.now());
        compareDate.setDate((new Date(Date.now())).getDate() - subtractedDays);
        let alertsOfThisDay = alerts.filter((alert) => {
            let dateOfAlertCreation = new Date(alert.createdOn);
            return dateOfAlertCreation.getDate() == compareDate.getDate();
        })
        return alertsOfThisDay.length;
    }

    public getdate(days: number){
        let now = new Date(Date.now());
        let day = this.today.getDate()-days;
        now.setDate(day);
        return now.toDateString();
    }
}