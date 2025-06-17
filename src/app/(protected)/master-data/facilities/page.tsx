import { FC, ReactElement } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { generatePath, useNavigate } from "react-router";

import { Page } from "@/app/_components/ui";
import DataTable from "@/app/_components/ui/data-table";
import { createPaginationInfo } from "@/utils/data-table";
import Filter from "@/app/_components/ui/filter";
import ActionButtonTable from "@/app/_components/ui/action-button-table";
import { useFilter } from "@/app/_hooks/use-filter";

import { TFacilities, TFacilitiesFilter } from "@/api/master-data/facilities/type";
import useGetListFacilities from "./_hooks/use-get-list-facilities";
import { paths } from "@/commons/constants/paths";

const Component: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { filters, setFilter } = useFilter<TFacilitiesFilter>();
  const query = useGetListFacilities({
    sort_by: "created_at",
    order: filters.order || "DESC",
    limit: 10,
    page: filters.page || 1,
  });

  const columns: GridColDef<TFacilities>[] = [
    { field: "facility_id", headerName: "ID Fasilitas", width: 120 },
    { field: "facility_name", headerName: "Nama Fasilitas", width: 200 },
    {
      field: "equipment_list",
      headerName: "List Perlengkapan",
      width: 300,
      renderCell: (params) => params.row.equipment_list.map((item) => item.name).toString(),
    },
    { field: "parking_info", headerName: "Info Parkir", width: 250 },
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
                  generatePath(paths.master_data.facilities.edit, { id: params.row.facility_id }),
                ),
            },
            {
              key: "detail",
              type: "detail",
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
          label: "Fasilitas",
          path: null,
        },
      ]}
      topPage={
        <Filter
          variants={["search"]}
          labelAdd="Tambah Fasilitas"
          onAdd={() => navigate(paths.master_data.facilities.create)}
          defaultValue={{
            search_value: filters.search_value,
          }}
        />
      }
    >
      <DataTable
        getRowId={(row: TFacilities) => row.facility_id}
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
      />
    </Page>
  );
};

export default Component;
