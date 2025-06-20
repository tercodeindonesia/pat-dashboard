import { FC, ReactElement } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { AddOutlined, FileDownloadOutlined } from "@mui/icons-material";
import { generatePath, useNavigate } from "react-router";

import { Page, Chip } from "@/app/_components/ui";
import DataTable from "@/app/_components/ui/data-table";
import { createPaginationInfo } from "@/utils/data-table";
import Filter from "@/app/_components/ui/filter";
import ActionButtonTable from "@/app/_components/ui/action-button-table";
import { formatDate } from "@/utils/date";
import { useFilter } from "@/app/_hooks/use-filter";
import { formatRupiah } from "@/utils/commons";

import { TTransacion, TTransactionFilter } from "@/api/transactions/type";
import useGetListTransaction from "./_hooks/use-get-list-transaction";
import getTransactionStatus from "./_utils/transaction-status";
import { paths } from "@/commons/constants/paths";

const Component: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { filters, setFilter } = useFilter<TTransactionFilter>();
  const query = useGetListTransaction({
    sort_by: "created_at",
    order: filters.order || "DESC",
    limit: 10,
    page: filters.page || 1,
  });

  const columns: GridColDef<TTransacion>[] = [
    { field: "booking_id", headerName: "ID Booking", width: 150 },
    { field: "fullname", headerName: "Nama Lengkap", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "No. Whatsapp", width: 150 },
    { field: "address", headerName: "Alamat", width: 250 },
    {
      field: "booking_date",
      headerName: "Tanggal Booking",
      width: 150,
      renderCell: (params) => formatDate(params.row.booking_date) ?? "-",
    },
    {
      field: "total_price",
      headerName: "Total Transaksi",
      width: 150,
      renderCell: (params) => formatRupiah(params.row?.total_price) ?? "-",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        const { label, color, bg } = getTransactionStatus(params.row?.status);

        return <Chip label={label} color={color} bg={bg} />;
      },
    },
    { field: "created_by", headerName: "Dibuat Oleh", width: 150 },
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
                navigate(generatePath(paths.transaction.edit, { id: params.row.booking_id })),
            },
            {
              key: "detail",
              type: "detail",
              onClick: () => {},
            },
            {
              key: "delete",
              render: (
                <IconButton color="success">
                  <FileDownloadOutlined />
                </IconButton>
              ),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <Page
      topPage={
        <Filter
          defaultValue={{
            search_value: filters.search_value,
            start_date: filters.start_date,
            end_date: filters.end_date,
          }}
          actions={[
            <Button
              key="add"
              variant="contained"
              startIcon={<AddOutlined />}
              onClick={() => navigate(paths.master_data.access_admin.create)}
            >
              Tambah Admin
            </Button>,
          ]}
        />
      }
    >
      <DataTable
        getRowId={(row: TTransacion) => row.booking_id}
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
