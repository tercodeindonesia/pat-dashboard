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
    package_id: "1",
    package_name: "Paket Silver",
    package_type: "Basic",
    package_facilities: [
      {
        facility_id: "1",
        facility_name: "Aula Utama",
        equipment_list: [
          { name: "Sound System" },
          { name: "Proyektor" },
          { name: "AC" },
          { name: "Kursi 200 buah" },
        ],
        parking_info: "Tersedia 50 slot parkir mobil dan 100 slot parkir motor",
      },
    ],
  },
  {
    package_id: "2",
    package_name: "Paket Gold",
    package_type: "Premium",
    package_facilities: [
      {
        facility_id: "1",
        facility_name: "Aula Utama",
        equipment_list: [
          { name: "Sound System" },
          { name: "Proyektor" },
          { name: "AC" },
          { name: "Kursi 200 buah" },
        ],
        parking_info: "Tersedia 50 slot parkir mobil dan 100 slot parkir motor",
      },
      {
        facility_id: "2",
        facility_name: "Ruang VIP",
        equipment_list: [
          { name: "Sound System Premium" },
          { name: "LED TV 65 inch" },
          { name: "AC Central" },
          { name: "Kursi VIP 50 buah" },
        ],
        parking_info: "Tersedia 20 slot parkir mobil VIP",
      },
    ],
  },
  {
    package_id: "3",
    package_name: "Paket Platinum",
    package_type: "Luxury",
    package_facilities: [
      {
        facility_id: "1",
        facility_name: "Aula Utama",
        equipment_list: [
          { name: "Sound System" },
          { name: "Proyektor" },
          { name: "AC" },
          { name: "Kursi 200 buah" },
        ],
        parking_info: "Tersedia 50 slot parkir mobil dan 100 slot parkir motor",
      },
      {
        facility_id: "2",
        facility_name: "Ruang VIP",
        equipment_list: [
          { name: "Sound System Premium" },
          { name: "LED TV 65 inch" },
          { name: "AC Central" },
          { name: "Kursi VIP 50 buah" },
        ],
        parking_info: "Tersedia 20 slot parkir mobil VIP",
      },
      {
        facility_id: "5",
        facility_name: "Ballroom",
        equipment_list: [
          { name: "Sound System Professional" },
          { name: "Lighting System" },
          { name: "AC Central" },
          { name: "Stage" },
          { name: "Kursi 300 buah" },
        ],
        parking_info: "Tersedia 80 slot parkir mobil dan 150 slot parkir motor",
      },
    ],
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
    result: mock.find((item) => item.package_id === params?.id) || null,
  });

  const res = await api.get(generatePath(endpoints.detail, { params }));
  return res.data;
};

export const createWeddingPackages = async (req: TWeddingPackagesRequest): Promise<TDefaultResponse> => {
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
