import { api } from "@/libs/axios/api";
import { TLoginOidcParam, TLoginParam, TLoginResponse } from "./type";

export const postLogin = async (payload: TLoginParam): Promise<TLoginResponse> => {
  console.log("teriggered", payload);
  const data = Promise.resolve({
    data: {
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: {
        id: "1",
        name: "Admin",
        email: "admin@mail.com",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        roles: [
          {
            id: "1",
            key: "admin",
            name: "Admin",
            permissions: [
              {
                id: "1",
                key: "1",
                name: "",
              },
            ],
          },
        ],
      },
    },
  });
  //const { data } = await api({
  //  url: "/auth/login",
  //  method: "POST",
  //  data: payload,
  //});
  console.log(data);
  return data;
};

export const postLoginOidc = async (payload: TLoginOidcParam): Promise<TLoginResponse> => {
  return {
    data: {
      access_token: "access_token",
      refresh_token: "refresh_token",
      user: {
        id: "1",
        name: "Admin",
        email: "admin@mail.com",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        roles: [
          {
            id: "1",
            key: "admin",
            name: "Admin",
            permissions: [],
          },
        ],
      },
    },
  };
  const { data } = await api({
    url: "/auth/login",
    method: "POST",
    data: payload,
  });
  return data;
};
