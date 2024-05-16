import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "fistName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.fistName?.toString() || String(record.id);
};
