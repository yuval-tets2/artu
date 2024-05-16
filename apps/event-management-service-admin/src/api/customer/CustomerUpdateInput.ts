import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  events?: EventUpdateManyWithoutCustomersInput;
  fistName?: string | null;
  lastName?: string | null;
};
