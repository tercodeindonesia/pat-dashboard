import { useEffect } from "react";
import { Button, Grid, Stack, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormTextField from "@/app/_components/ui/form-text-field";

import { WeddingPackagesSchema, TWeddingPackagesFormData } from "./schema";
import FormAutoCompleteField from "@/app/_components/ui/form-auto-complete";
import { mainFacilities, otherFacilities } from "./data";
import HelperText from "@/app/_components/ui/helper-text";
import FormEditorField from "@/app/_components/ui/form-editor-field";
import FormUploadField from "@/app/_components/ui/form-upload-field";

interface Props {
  loading?: boolean;
  isEdit?: boolean;
  handleSubmit: (data: TWeddingPackagesFormData) => void;
  defaultValues?: Partial<TWeddingPackagesFormData>;
}

const WeddingPackagesForm = ({ loading, handleSubmit, defaultValues }: Props) => {
  const form = useForm<TWeddingPackagesFormData>({
    resolver: zodResolver(WeddingPackagesSchema),
    mode: "onChange",
  });

  useEffect(() => {
    form.reset({
      ...defaultValues,
    });
  }, [form, defaultValues]);

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FormTextField
            variant="filled"
            label="Nama Paket"
            control={form.control}
            name="name"
            required
            placeholder="Ex: Paket Silver"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <FormAutoCompleteField
            label="Type Paket"
            control={form.control}
            name="type"
            defaultValue={defaultValues?.type}
            required
            placeholder="Ex: Basic, Premium, Luxury"
            options={[
              { label: "type1", value: "Tipe A" },
              { label: "type2", value: "Tipe B" },
              { label: "type3", value: "Tipe C" },
              { label: "type4", value: "Tipe D" },
              { label: "type5", value: "Tipe E" },
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormTextField
            variant="filled"
            label="Harga Mulai"
            control={form.control}
            name="starting_price"
            required
            placeholder="Ex: 10.000.000"
          />
        </Grid>

        <Grid container size={{ xs: 12 }} spacing={4}>
          <Controller
            control={form.control}
            name="facilities"
            render={({ fieldState }) => (
              <>
                <Grid container size={{ xs: 12 }} spacing={2}>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <Typography>Fasilitas Utama</Typography>
                  </Grid>
                  <Grid container size={{ xs: 12, md: 6 }}>
                    {mainFacilities.map((item) => (
                      <Grid key={item.id} size={{ xs: 12, md: 6 }}>
                        <Controller
                          name={`facilities.${item.id}.checked`}
                          control={form.control}
                          render={({ field }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={field.value}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                />
                              }
                              label={item.title}
                              sx={(theme) => ({
                                "&.MuiFormControlLabel-root": {
                                  paddingRight: "12px",
                                  margin: 0,
                                  borderRadius: "4px",
                                  border: `1px solid #EEEEF0`,
                                  ...(field.value
                                    ? {
                                        color: theme.palette.primary.main,
                                        backgroundColor: "rgba(48, 74, 54, 0.37)",
                                      }
                                    : {}),
                                },
                              })}
                            />
                          )}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid container size={{ xs: 12 }}>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <Typography>Fasilitas Lainnya</Typography>
                  </Grid>
                  <Grid container size={{ xs: 12, md: 6 }} spacing={2}>
                    {otherFacilities.map((item) => (
                      <Grid key={item.id} size={{ xs: 12, md: 6 }}>
                        <Controller
                          name={`facilities.${item.id}.checked`}
                          control={form.control}
                          render={({ field }) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={field.value}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                />
                              }
                              label={item.title}
                              sx={(theme) => ({
                                "&.MuiFormControlLabel-root": {
                                  paddingRight: "12px",
                                  margin: 0,
                                  borderRadius: "4px",
                                  border: `1px solid #EEEEF0`,
                                  ...(field.value
                                    ? {
                                        color: theme.palette.primary.main,
                                        backgroundColor: "rgba(48, 74, 54, 0.37)",
                                      }
                                    : {}),
                                },
                              })}
                            />
                          )}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <HelperText error={fieldState.invalid}>{fieldState.error?.message}</HelperText>
              </>
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            control={form.control}
            name="thumbnail"
            render={({ field, fieldState }) => (
              <FormUploadField
                label="Upload Thumbnail"
                uploadDesc="Format Foto JPG, PNG, JPEG. Ukuran Maksimal 2 MB"
                name={field.name}
                value={field.value}
                error={fieldState.invalid}
                helper={fieldState.error?.message}
                required
                onChange={() => {
                  // handleUpload("image_url", event);
                }}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            control={form.control}
            name="image"
            render={({ field, fieldState }) => (
              <FormUploadField
                label="Upload Image"
                uploadDesc="Format Foto JPG, PNG, JPEG. Ukuran Maksimal 2 MB"
                name={field.name}
                value={field.value}
                error={fieldState.invalid}
                helper={fieldState.error?.message}
                required
                onChange={() => {
                  // handleUpload("image_url", event);
                }}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            control={form.control}
            name="portfolio"
            render={({ field, fieldState }) => (
              <FormUploadField
                label="Upload Portfolio"
                uploadDesc="Format Foto PDF. Ukuran Maksimal 2 MB"
                name={field.name}
                value={field.value}
                error={fieldState.invalid}
                helper={fieldState.error?.message}
                required
                onChange={() => {
                  // handleUpload("image_url", event);
                }}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            control={form.control}
            name="video"
            render={({ field, fieldState }) => (
              <FormUploadField
                label="Upload Video"
                uploadDesc="Format Foto MP4, MOV, AVI, dan WMV. Ukuran Maksimal 10 MB"
                name={field.name}
                value={field.value}
                error={fieldState.invalid}
                helper={fieldState.error?.message}
                required
                onChange={() => {
                  // handleUpload("image_url", event);
                }}
              />
            )}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FormEditorField label="Deskripsi" control={form.control} name="contents" required />
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

export default WeddingPackagesForm;
