import { generatePath } from "react-router";
import { api } from "@/libs/axios/api";

import { TDetailParams } from "../common";
import { TDetailTransactionResponse, TListTransactionResponse, TTransactionFilter } from "./type";

const endpoints = {
  list: "/transactions",
  detail: "/transactions/:id",
};

export const getListTransaction = async (
  params?: TTransactionFilter,
): Promise<TListTransactionResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: {
      data: [
        {
          booking_id: "BK001",
          fullname: "Andi Wijaya",
          email: "andi.wijaya@example.com",
          phone: "081234567890",
          address: "Jl. Merdeka No. 10, Jakarta",
          booking_date: "2025-06-10T10:00:00.000Z",
          total_transaction: 1500000,
          status: "success",
          created_by: "admin",
        },
        {
          booking_id: "BK002",
          fullname: "Siti Rahmawati",
          email: "siti.rahmawati@example.com",
          phone: "082198765432",
          address: "Jl. Gatot Subroto No. 20, Bandung",
          booking_date: "2025-06-11T14:30:00.000Z",
          total_transaction: 2000000,
          status: "cancel",
          created_by: "user123",
        },
        {
          booking_id: "BK003",
          fullname: "Budi Santoso",
          email: "budi.santoso@example.com",
          phone: "081223344556",
          address: "Jl. Sudirman No. 5, Surabaya",
          booking_date: "2025-06-12T09:15:00.000Z",
          total_transaction: 1750000,
          status: "pending",
          created_by: "admin",
        },
        {
          booking_id: "BK004",
          fullname: "Rina Marlina",
          email: "rina.marlina@example.com",
          phone: "085612345678",
          address: "Jl. Ahmad Yani No. 15, Medan",
          booking_date: "2025-06-09T16:45:00.000Z",
          total_transaction: 2200000,
          status: "cancel",
          created_by: "staff01",
        },
      ],
      current_page: 1,
      total: 10,
      total_page: 4,
      has_previous_page: false,
      has_next_page: true,
    },
  });

  const res = await api.get(endpoints.list, { params });

  return res.data;
};

export const getDetailTransaction = async (
  params: TDetailParams,
): Promise<TDetailTransactionResponse> => {
  const res = await api.get(generatePath(endpoints.detail, { params }));
  return res.data;
};
