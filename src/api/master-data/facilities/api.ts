import { generatePath } from "react-router";
import { api } from "@/libs/axios/api";

import { TDetailParams } from "../../common";
import {
  TDetailFacilitiesResponse,
  TListFacilitiesResponse,
  TFacilities,
  TFacilitiesFilter,
  TFacilitiesRequest,
} from "./type";
import { TDefaultResponse } from "@/commons/types/response";

const endpoints = {
  list: "/master-data/facilities",
  detail: "/master-data/facilities/:id",
  create: "/master-data/facilities/create",
  edit: "/master-data/facilities/:id/update",
};

const mock: TFacilities[] = [
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
    facility_id: "3",
    facility_name: "Taman Outdoor",
    equipment_list: [{ name: "Tenda" }, { name: "Lampu Hias" }, { name: "Sound System Outdoor" }],
    parking_info: "Tersedia 30 slot parkir mobil dan 80 slot parkir motor",
  },
  {
    facility_id: "4",
    facility_name: "Ruang Meeting",
    equipment_list: [
      { name: "Proyektor" },
      { name: "Whiteboard" },
      { name: "AC" },
      { name: "Meja Meeting" },
      { name: "Kursi 20 buah" },
    ],
    parking_info: "Tersedia 15 slot parkir mobil",
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
];

export const getListFacilities = async (
  params?: TFacilitiesFilter,
): Promise<TListFacilitiesResponse> => {
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

export const getDetailFacilities = async (
  params?: TDetailParams,
): Promise<TDetailFacilitiesResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: mock.find((item) => item.facility_id === params?.id) || null,
  });

  const res = await api.get(generatePath(endpoints.detail, { params }));
  return res.data;
};

export const createFacilities = async (req: TFacilitiesRequest): Promise<TDefaultResponse> => {
  return Promise.resolve({
    code: 200,
    message: "Berhasil",
    status: true,
    result: null,
  });
  const res = await api.post(endpoints.create, { data: req });
  return res.data;
};

export const editFacilities = async (
  params: TDetailParams,
  req: TFacilitiesRequest,
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
