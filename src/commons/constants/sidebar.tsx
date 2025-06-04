import {
  DashboardOutlined,
  EditNoteRounded,
  PaidOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import { paths } from "./paths";
import { PERMISSIONS } from "./permissions";

export type TSidebarItem = {
  key: string;
  label: string;
  path?: string;
  icon?: React.ReactNode;
  permissions?: string[];
  children?: TSidebarItem[];
};

export const SIDEBAR_ITEMS: TSidebarItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: paths.dashboard,
    icon: <DashboardOutlined />,
    permissions: [PERMISSIONS.DEFAULT],
  },
  {
    key: "transaction",
    label: "Transaksi",
    path: paths.transaction,
    icon: <PaidOutlined />,
    permissions: [PERMISSIONS.DEFAULT],
  },
  {
    key: "master-data",
    label: "Master Data",
    icon: <SettingsOutlined />,
    permissions: [PERMISSIONS.DEFAULT],
    children: [
      {
        key: "master-data-access-admin",
        label: "Akses Admin",
        path: paths.master_data.access_admin.list,
        permissions: [PERMISSIONS.DEFAULT],
      },
      {
        key: "master-data-facilities",
        label: "Fasilitas",
        path: paths.master_data.facilities.list,
        permissions: [PERMISSIONS.DEFAULT],
      },
      {
        key: "master-data-weeding-package",
        label: "Pake Pernikahan",
        path: paths.master_data.weeding_package.list,
        permissions: [PERMISSIONS.DEFAULT],
      },
      {
        key: "master-data-vendor",
        label: "Vendor",
        path: paths.master_data.vendor.list,
        permissions: [PERMISSIONS.DEFAULT],
      },
      {
        key: "master-data-contact",
        label: "Kontak",
        path: paths.master_data.contacts.list,
        permissions: [PERMISSIONS.DEFAULT],
      },
    ],
  },
  {
    key: "content",
    label: "Konten",
    icon: <EditNoteRounded />,
    permissions: [PERMISSIONS.DEFAULT],
    children: [
      {
        key: "content-about-us",
        label: "Tentang Kami",
        path: paths.content.about_us,
        permissions: [PERMISSIONS.DEFAULT],
      },
      {
        key: "content-banner",
        label: "Banner",
        path: paths.content.banner,
        permissions: [PERMISSIONS.DEFAULT],
      },
    ],
  },
];
