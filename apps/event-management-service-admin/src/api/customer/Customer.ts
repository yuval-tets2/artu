import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  events?: Array<Event>;
  fistName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
