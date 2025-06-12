import { AxiosError } from "axios";
import { Nullable } from "./common";

export type TResponse<T> = {
  code: number;
  message: string | null;
  status: boolean | null;
  result: T;
};

export type TPaginationInfo = {
  current_page: number;
  total: number;
  total_page: number;
  has_previous_page: boolean;
  has_next_page: boolean;
};

export type TPagination<T = null> = {
  data: T;
} & TPaginationInfo;

export type TResponsePaginate<T> = TResponse<TPagination<T[]>>;

export type TError = {
  code: number;
  status: boolean;
  errors: boolean;
  message: Nullable<string>;
};

export type TErrorResponse = AxiosError<TError>;
export type TDefaultResponse<T = null> = TResponse<T>;
