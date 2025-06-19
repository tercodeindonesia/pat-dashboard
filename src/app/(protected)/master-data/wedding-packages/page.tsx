import { FC, ReactElement, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { generatePath, useNavigate } from "react-router";

import { Page } from "@/app/_components/ui";
import DataTable from "@/app/_components/ui/data-table";
import { createPaginationInfo } from "@/utils/data-table";
import Filter from "@/app/_components/ui/filter";
import ActionButtonTable from "@/app/_components/ui/action-button-table";
import { useFilter } from "@/app/_hooks/use-filter";

import { TWeddingPackages, TWeddingPackagesFilter } from "@/api/master-data/wedding-packages/type";
import useGetListWeddingPackages from "./_hooks/use-get-list-wedding-packages";
import { paths } from "@/commons/constants/paths";
import { Button } from "@mui/material";
import { AddOutlined, DeleteOutlined } from "@mui/icons-material";

const Component: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { filters, setFilter } = useFilter<TWeddingPackagesFilter>();
  const query = useGetListWeddingPackages({
    sort_by: "created_at",
    order: filters.order || "DESC",
    limit: 10,
    page: filters.page || 1,
  });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const columns: GridColDef<TWeddingPackages>[] = [
    { field: "id", headerName: "ID Paket", width: 120 },
    { field: "name", headerName: "Nama Paket", width: 200 },
    { field: "type", headerName: "Type Paket", width: 150 },
    {
      field: "package_facilities",
      headerName: "Fasilitas Paket",
      width: 300,
      renderCell: (params) => params.row.facilities.map((item) => item.value).join(", "),
    },
    {
      field: "actions",
      headerName: "Aksi",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <ActionButtonTable
          items={[
            {
              key: "edit",
              type: "edit",
              onClick: () =>
                navigate(
                  generatePath(paths.master_data.wedding_packages.edit, {
                    id: params.row.id,
                  }),
                ),
            },
            {
              key: "delete",
              type: "delete",
              onClick: () => {},
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Page
      breadcrumbs={[
        {
          label: "Master Data",
          path: null,
        },
        {
          label: "Paket Pernikahan",
          path: null,
        },
      ]}
      topPage={
        <Filter
          variants={["search"]}
          defaultValue={{
            search_value: filters.search_value,
          }}
          actions={[
            <Button
              key="add"
              variant="contained"
              startIcon={<AddOutlined />}
              onClick={() => navigate(paths.master_data.wedding_packages.create)}
            >
              Tambah Paket
            </Button>,
            ...(selectedIds.length
              ? [
                  <Button key="delete" variant="outlined" startIcon={<DeleteOutlined />}>
                    Delete
                  </Button>,
                ]
              : []),
          ]}
        />
      }
    >
      <DataTable
        getRowId={(row: TWeddingPackages) => row.id}
        loading={false}
        rows={query.data?.result.data}
        columns={columns}
        checkboxSelection
        paginationInfo={createPaginationInfo({
          per_page: 5,
          total: 10,
          page: 1,
        })}
        handleChange={setFilter}
        onRowSelectionModelChange={(ids) => {
          setSelectedIds(ids);
        }}
      />
    </Page>
  );
};

export default Component;
