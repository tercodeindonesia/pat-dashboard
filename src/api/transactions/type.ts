import { Nullable } from "@/commons/types/common";
import { TFilterParams } from "@/commons/types/filter";
import { TResponse, TResponsePaginate } from "@/commons/types/response";

export type TTransactionFilter = TFilterParams;

export type TTransactionStatus = "cancel" | "success" | "pending";

export type TTransacion = {
  booking_id: string;
  fullname: Nullable<string>;
  email: Nullable<string>;
  phone: Nullable<string>;
  address: Nullable<string>;
  booking_date: Nullable<string>;
  total_transaction: Nullable<number>;
  status: Nullable<TTransactionStatus>;
  created_by: Nullable<string>;
};

export type TTransactionRequest = {
  fullname: string;
  email: string;
  phone: string;
  address: string;
  booking_date: string;
  total_price: string;
  status: string;
  province: string;
  city: string;
  district: string;
  postal_code: string;
};

export type TDetailTransactionResponse = TResponse<TTransacion>;
export type TListTransactionResponse = TResponsePaginate<TTransacion>;
