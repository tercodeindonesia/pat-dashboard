import { Nullable } from "@/commons/types/common";
import { TFilterParams } from "@/commons/types/filter";
import { TResponse, TResponsePaginate } from "@/commons/types/response";

export type TFacilitiesFilter = TFilterParams;

export type TFacilities = {
  facility_id: string;
  facility_name: string;
  equipment_list: { name: string }[];
  parking_info: string;
};

export type TFacilitiesRequest = Omit<TFacilities, "facility_id"> & {};

export type TDetailFacilitiesResponse = TResponse<Nullable<TFacilities>>;
export type TListFacilitiesResponse = TResponsePaginate<TFacilities>;
