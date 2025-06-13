import { alpha, Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { TFilterParams } from "@/commons/types/filter";

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
    limit?: number;
  };
}

const DataTable = ({ handleChange, paginationInfo, ...others }: DataTableProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        {...others}
        hideFooterPagination
        hideFooter
        disableRowSelectionOnClick
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
      />
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography>Rows Per Page :</Typography>
          <Select
            value={paginationInfo.limit}
            onChange={(e) => handleChange({ per_page: e.target.value })}
            autoWidth
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </Stack>
        <MuiPagination
          count={paginationInfo.page_size}
          page={paginationInfo.page}
          defaultPage={1}
          siblingCount={0}
          size="large"
          shape="rounded"
          onChange={(_e, value) => handleChange({ page: value })}
        />
      </Stack>
    </Box>
  );
};
export default DataTable;
