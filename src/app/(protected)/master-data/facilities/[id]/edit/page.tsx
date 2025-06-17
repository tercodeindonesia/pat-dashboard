import { useNavigate, useParams } from "react-router";
import { useSnackbar } from "notistack";

import { Page } from "@/app/_components/ui";
import { TFacilitiesRequest } from "@/api/master-data/facilities/type";
import { paths } from "@/commons/constants/paths";

import { TFacilitiesFormData } from "../../_components/form/schema";
import FacilitiesForm from "../../_components/form";
import useEditFacilities from "./_hooks/use-edit-facilities";
import useGetDetailFacilities from "../_hooks/use-get-detail-facilities";

const EditFacilitiesPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const query = useGetDetailFacilities({ id: params.id! });

  const data = query.data?.result;

  const mutation = useEditFacilities({ id: params.id! });

  const handleSubmit = (data: TFacilitiesFormData) => {
    const payload: TFacilitiesRequest = data;

    mutation.mutate(payload, {
      onSuccess: () => {
        enqueueSnackbar("Berhasil mengubah Fasilitas", { variant: "success" });
        navigate(paths.master_data.facilities.list);
      },
      onError: () => {
        enqueueSnackbar("Gagal mengubah Fasilitas", { variant: "error" });
      },
    });
  };

  return (
    <Page
      loading={query.isLoading}
      title="Data Fasilitas"
      breadcrumbs={[
        {
          label: "Master Data",
          path: paths.master_data.facilities.list,
        },
        {
          label: "Fasilitas",
          path: paths.master_data.facilities.list,
        },
        {
          label: "Edit Fasilitas",
          path: null,
        },
      ]}
    >
      <FacilitiesForm
        loading={mutation.isPending}
        handleSubmit={handleSubmit}
        defaultValues={{
          facility_name: data?.facility_name,
          equipment_list: data?.equipment_list,
          parking_info: data?.parking_info,
        }}
      />
    </Page>
  );
};

export default EditFacilitiesPage;
