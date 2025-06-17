export const paths = {
  dashboard: "/dashboard",
  transaction: {
    list: "/transactions",
    create: "/transactions/create",
    edit: "/transactions/:id/edit",
  },
  master_data: {
    access_admin: {
      list: "/master-data/access-admin",
      create: "/master-data/access-admin/create",
      edit: "/master-data/access-admin/:id/edit",
    },
    facilities: {
      list: "/master-data/facilities",
      create: "/master-data/facilities/create",
      edit: "/master-data/facilities/:id/edit",
    },
    weeding_package: {
      list: "/master-data/wedding-packages",
    },
    vendor: {
      list: "/master-data/vendors",
    },
    contacts: {
      list: "/master-data/contacts",
    },
  },
  content: {
    about_us: "/content/about-us",
    banner: "/content/banner",
  },
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    callback: "/auth/oauth-callback",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },
};
