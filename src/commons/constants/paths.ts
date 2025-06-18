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
    wedding_packages: {
      list: "/master-data/wedding-packages",
      create: "/master-data/wedding-packages/create",
      edit: "/master-data/wedding-packages/:id/edit",
    },
    vendors: {
      list: "/master-data/vendors",
      create: "/master-data/vendors/create",
      edit: "/master-data/vendors/:id/edit",
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
