import { useEffect } from "react";
import { Button, Grid, Stack, IconButton, Box, Typography } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add, Delete } from "@mui/icons-material";

import FormTextField from "@/app/_components/ui/form-text-field";

import { FacilitiesSchema, TFacilitiesFormData } from "./schema";

interface Props {
  loading?: boolean;
  isEdit?: boolean;
  handleSubmit: (data: TFacilitiesFormData) => void;
  defaultValues?: Partial<TFacilitiesFormData>;
}

const FacilitiesForm = ({ loading, handleSubmit, defaultValues }: Props) => {
  const form = useForm<TFacilitiesFormData>({
    resolver: zodResolver(FacilitiesSchema),
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "equipment_list",
  });

  useEffect(() => {
    form.reset({
      ...defaultValues,
    });
  }, [form]);

  const addEquipment = () => {
    append({ name: "" });
  };

  const removeEquipment = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <FormTextField
            variant="filled"
            label="Nama Fasilitas"
            control={form.control}
            name="facility_name"
            required
            placeholder="Ex: Aula Utama"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="h6" gutterBottom>
            List Perlengkapan *
          </Typography>
          {fields.map((field, index) => (
            <Box key={field.id} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <FormTextField
                label={`Perlengkapan ${index + 1}`}
                control={form.control}
                name={`equipment_list.${index}.name`}
                placeholder="Ex: Sound System"
                sx={{ flex: 1, mr: 1 }}
              />
              <IconButton
                onClick={() => removeEquipment(index)}
                disabled={fields.length === 1}
                color="error"
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
          <Button startIcon={<Add />} onClick={addEquipment} variant="outlined" size="small">
            Tambah Perlengkapan
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormTextField
            label="Info Parkir"
            control={form.control}
            name="parking_info"
            required
            placeholder="Ex: Tersedia 50 slot parkir mobil dan 100 slot parkir motor"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: "24px",
        }}
      >
        <Button loading={loading} type="submit" variant="contained">
          Simpan
        </Button>
      </Stack>
    </form>
  );
};

export default FacilitiesForm;
