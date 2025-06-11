import { alpha, Box, TablePaginationProps } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import {
  DataGrid,
  DataGridProps,
  gridPageCountSelector,
  GridPagination,
  PaginationPropsOverrides,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { TFilterParams } from "@/commons/types/filter";

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      shape="rounded"
      onChange={(event, newPage) => {
        onPageChange(event as React.MouseEvent<HTMLButtonElement>, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props: PaginationPropsOverrides) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

export interface DataTableProps
  extends Omit<
    DataGridProps,
    "pageSizeOptions" | "paginationModel" | "paginationMode" | "rowCount"
  > {
  handleChange: (pagination: Pick<TFilterParams, "page" | "per_page">) => void;
  paginationInfo: {
    total?: number;
    page_size: number;
    page: number;
  };
}

const DataTable = ({ handleChange, paginationInfo, ...others }: DataTableProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        {...others}
        paginationMode="server"
        paginationModel={{
          pageSize: paginationInfo.page_size,
          page: paginationInfo.page,
        }}
        rowCount={paginationInfo.total}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        slots={{
          pagination: CustomPagination,
        }}
        sx={{
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#f9f9f9",
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-row:hover": (theme) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.06),
          }),
          "& .MuiDataGrid-columnHeaders .MuiDataGrid-filler": {
            backgroundColor: "#ffffff",
          },
        }}
        onPaginationModelChange={(params) => {
          const page = params.page ? params.page + 1 : 1;
          handleChange({
            page,
            per_page: params.pageSize,
          });
        }}
      />
    </Box>
  );
};
export default DataTable;
