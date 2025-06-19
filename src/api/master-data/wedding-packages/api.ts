import { generatePath } from "react-router";
import { api } from "@/libs/axios/api";

import { TDetailParams } from "../../common";
import {
  TDetailWeddingPackagesResponse,
  TListWeddingPackagesResponse,
  TWeddingPackages,
  TWeddingPackagesFilter,
  TWeddingPackagesRequest,
} from "./type";
import { TDefaultResponse } from "@/commons/types/response";

const endpoints = {
  list: "/master-data/wedding-packages",
  detail: "/master-data/wedding-packages/:id",
  create: "/master-data/wedding-packages/create",
  edit: "/master-data/wedding-packages/:id/update",
};

const mock: TWeddingPackages[] = [
  {
    id: "pkg-001",
    name: "Paket Silver",
    type: "Indoor",
    facilities: [
      { id: "f-01", value: "Taman Dalam" },
      { id: "f-02", value: "Lorong Griya" },
      { id: "f-03", value: "Pendopo Utama" },
      { id: "f-04", value: "Toilet" },
      { id: "f-05", value: "Kursi" },
    ],
    starting_price: "15000000",
  },
  {
    id: "pkg-002",
    name: "Paket Gold",
    type: "Outdoor",
    facilities: [
      { id: "f-06", value: "Taman Luar" },
      { id: "f-07", value: "Gazebo" },
      { id: "f-08", value: "Area Parkir" },
      { id: "f-09", value: "Area Cuci Tangan" },
      { id: "f-10", value: "Meja" },
    ],
    starting_price: "30000000",
  },
  {
    id: "pkg-003",
    name: "Paket Platinum",
    type: "Indoor & Outdoor",
    facilities: [
      { id: "f-11", value: "Griya Ayem & Tentrem" },
      { id: "f-12", value: "Pantry Catering" },
      { id: "f-13", value: "Selaras" },
      { id: "f-14", value: "Muchola" },
      { id: "f-15", value: "CCTV" },
    ],
    starting_price: "50000000",
  },
];

export const getListWeddingPackages = async (
  params?: TWeddingPackagesFilter,
): Promise<TListWeddingPackagesResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: {
      data: mock,
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

export const getDetailWeddingPackages = async (
  params?: TDetailParams,
): Promise<TDetailWeddingPackagesResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: mock.find((item) => item.id === params?.id) || null,
  });

  const res = await api.get(generatePath(endpoints.detail, { params }));
  return res.data;
};

export const createWeddingPackages = async (
  req: TWeddingPackagesRequest,
): Promise<TDefaultResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: null,
  });
  const res = await api.post(endpoints.create, { data: req });
  return res.data;
};

export const editWeddingPackages = async (
  params: TDetailParams,
  req: TWeddingPackagesRequest,
): Promise<TDefaultResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: null,
  });

  const res = await api.put(generatePath(endpoints.edit, { id: params.id }), { data: req });
  return res.data;
};
