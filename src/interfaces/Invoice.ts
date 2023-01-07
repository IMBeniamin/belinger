export default interface Invoice {
  id: number;
  emission: Date;
  customer: string;
  account: string;
  paid: boolean;
  expiry: Date;
  amount: number;
}
