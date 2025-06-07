import { FC, ReactElement } from "react";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { Page } from "@/app/_components/ui";
import DataTable from "@/app/_components/ui/data-table";

import { createPaginationInfo } from "@/utils/data-table";

const rows: GridRowsProp = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" },
];

const columns: GridColDef[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", flex: 1 },
];

const Component: FC = (): ReactElement => {
  return (
    <Page noStyle>
      <DataTable
        getRowId={(row) => row.id}
        loading={false}
        rows={rows}
        columns={columns}
        checkboxSelection
        paginationInfo={createPaginationInfo({
          total: 10,
          page: 1,
        })}
        handleChange={() => {}}
      />
    </Page>
  );
};

export default Component;
