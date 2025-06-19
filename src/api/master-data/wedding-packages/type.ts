import { Nullable } from "@/commons/types/common";
import { TFilterParams } from "@/commons/types/filter";
import { TResponse, TResponsePaginate } from "@/commons/types/response";

export type TWeddingPackagesFilter = TFilterParams;

export type TWeddingPackages = {
  id: string;
  name: string;
  type: string;
  facilities: { id: string; value: string }[];
  starting_price: string;
};

export type TWeddingPackagesRequest = {
  name: string;
  type: string;
  staring_price: string;
  facilities: string[];
  thumbnail: string;
  image: string;
  portfolio: string;
  video: string;
  description: string;
};

export type TDetailWeddingPackagesResponse = TResponse<Nullable<TWeddingPackages>>;
export type TListWeddingPackagesResponse = TResponsePaginate<TWeddingPackages>;
