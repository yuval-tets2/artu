import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  events?: EventListRelationFilter;
  fistName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
