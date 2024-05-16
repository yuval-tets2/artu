import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  comment?: StringNullableFilter;
  events?: EventListRelationFilter;
  fistName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
