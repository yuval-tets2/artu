import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  comment?: string | null;
  events?: EventCreateNestedManyWithoutCustomersInput;
  fistName?: string | null;
  lastName?: string | null;
};
