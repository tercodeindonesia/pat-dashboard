export const queryKeys = {
  transactions: {
    list: "transactions/list",
    detail: "transaction/detail",
  },
  masterData: {
    accessAdmin: {
      list: "master-data/access-admin/list",
      detail: "master-data/access-admin/detail",
    },
    facilities: {
      list: "master-data/facilities/list",
      detail: "master-data/facilities/detail",
    },
  },
} as const;
