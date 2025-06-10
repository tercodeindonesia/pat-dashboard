import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FileDownloadOutlined, SearchOutlined } from "@mui/icons-material";
import { Box, Button, Collapse, Grid, Stack, TextField, Typography } from "@mui/material";

import { useDebounce } from "@/app/_hooks/use-debounce";
import { useFilter } from "@/app/_hooks/use-filter";

import FormDateField from "../form-date-field";
import FormTextField from "../form-text-field";
import FormDropdownField from "../form-dropdown-field";

interface FilterProps {
  onAdd?: () => void;
  labelAdd?: string;
  withPriode?: boolean;
  withAddButton?: boolean;
  labelSearch?: string;
  filterGroup?: {
    label: string;
    name: string;
    type: "text" | "date" | "select";
    placeholder?: string;
    options?: { value: string; label: string }[];
  }[];
  defaultValue?: Record<string, unknown>;
  handleDownload?: () => void;
}

const Filter = ({
  filterGroup,
  onAdd,
  labelAdd = "Tambah Produk",
  // withPriode = true,
  withAddButton = true,
  defaultValue,
  labelSearch = "",
}: FilterProps) => {
  const [moreFilter, setMoreFilter] = useState(false);
  const { control, handleSubmit, watch, reset } = useForm();
  const { setFilter } = useFilter();
  const debounce = useDebounce();

  const handleApply = (data: object) => {
    setFilter(data);
  };

  const searchValue = watch("search_value");
  const start = watch("start_date");
  const end = watch("end_date");

  useEffect(() => {
    debounce({
      cb: () => {
        setFilter({ search_value: searchValue, start_date: start, end_date: end });
      },
    });
  }, [searchValue, start, end, setFilter, debounce]);

  useEffect(() => {
    if (defaultValue) {
      reset(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <Grid container alignItems="center">
        <Grid size={{ xs: 12, md: 10 }}>
          <Grid container alignItems="center" spacing={3} sx={{ width: "fit-content" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                }}
              >
                <Controller
                  control={control}
                  name="search_value"
                  render={({ field }) => (
                    <TextField
                      value={field.value || ""}
                      onChange={field.onChange}
                      variant="outlined"
                      placeholder={`Cari ${labelSearch}`}
                      fullWidth
                      slotProps={{
                        input: {
                          endAdornment: <SearchOutlined color="disabled" />,
                        },
                      }}
                      sx={{
                        backgroundColor: "white",
                      }}
                    />
                  )}
                />
                <Button
                  variant="text"
                  sx={{
                    padding: "4px 23px",
                  }}
                  onClick={() => {
                    // setDownloadPopup(true);
                  }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        backgroundColor: "rgba(36, 174, 95, 0.12)",
                        padding: "4px",
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                      }}
                    >
                      <FileDownloadOutlined
                        sx={{
                          color: "#24AE5F",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      Excel
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <FormDateField
                control={control}
                name="start_date"
                format="YYYY-MM-DD"
                placeholder="Dari Tanggal"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <FormDateField
                control={control}
                name="end_date"
                format="YYYY-MM-DD"
                placeholder="Sampai Tanggal"
              />
            </Grid>
          </Grid>
        </Grid>
        {withAddButton ? (
          <Grid size={{ xs: 12, md: 2 }} sx={{ textAlign: "right" }}>
            <Button variant="contained" onClick={onAdd}>
              {labelAdd}
            </Button>
          </Grid>
        ) : null}
      </Grid>
      {filterGroup ? (
        <Collapse in={moreFilter} sx={{ width: "100%" }}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "17px 18px",
            }}
          >
            <form onSubmit={handleSubmit(handleApply)}>
              <Grid container columnSpacing={2} rowSpacing={2}>
                {filterGroup.map((filter) => (
                  <Grid key={filter.name} size={{ xs: 12, md: 4 }}>
                    {filter.type === "text" ? (
                      <FormTextField
                        control={control}
                        name={filter.name}
                        label={filter.label}
                        placeholder={filter.placeholder}
                      />
                    ) : null}

                    {filter.type === "select" ? (
                      <FormDropdownField
                        control={control}
                        name={filter.name}
                        label={filter.label}
                        placeholder={filter.placeholder}
                        options={filter.options || []}
                      />
                    ) : null}

                    {filter.type === "date" ? (
                      <FormDateField control={control} name={filter.name} label="Dibuat pada" />
                    ) : null}
                  </Grid>
                ))}
              </Grid>
              <Stack
                direction="row"
                sx={{
                  marginTop: "16px",
                  justifyContent: "flex-end",
                  gap: "16px",
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setMoreFilter(false);
                  }}
                >
                  Batal
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  Terapkan Filter
                </Button>
              </Stack>
            </form>
          </Box>
        </Collapse>
      ) : null}

      {/*
      <Popup
        type="warning"
        title="Lanjutkan untuk Mengunduh?"
        open={downloadPopup}
        onClose={() => {
          setDownloadPopup(false);
        }}
        okText="Konfirmasi"
        onOk={() => {
          setDownloadPopup(false);
          handleDownload && handleDownload();
        }}
      />
      */}
    </>
  );
};

export default Filter;
