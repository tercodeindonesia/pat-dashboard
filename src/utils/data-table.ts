import { DataTableProps } from "@/app/_components/ui/data-table";

export const createPaginationInfo = (
  params?: Record<string, number>,
): DataTableProps["paginationInfo"] => {
  return {
    total: params?.total,
    page_size: 10,
    page: params?.page ? params.page - 1 : 0,
  };
};
