import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  comment?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  fistName?: string | null;
  lastName?: string | null;
};
