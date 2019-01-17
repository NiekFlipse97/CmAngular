export class Alert {
  merchantAmount: number;
  currency: string;
  paymentMethod: string;
  buyerName: string;
  merchantName: string;
  organizationName: string;
  mcc: number;
  createdOn: Date;

  constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}
