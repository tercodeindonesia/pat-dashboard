import React from "react";
import { FormControl, FormGroup, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import dayjs from "dayjs";

type Props<T extends FieldValues> = UseControllerProps<T> &
  React.ComponentProps<typeof DatePicker> & {
    label?: string;
    required?: boolean;
    defaultValue?: string | null;
    placeholder?: string;
    format?: string;
  };

const FormInputDateField = <T extends FieldValues>({
  control,
  name,
  label = "",
  placeholder = "DD/MM/YYYY",
  format = "DD-MM-YYYY",
  required = false,
  defaultValue,
  ...rest
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormControl variant="standard" sx={{ width: "100%" }}>
          {label ? (
            <InputLabel htmlFor={field.name} error={fieldState.invalid} required={required}>
              {label}
            </InputLabel>
          ) : null}
          <FormGroup>
            <DatePicker
              {...rest}
              value={field.value ? dayjs(field.value) : null}
              defaultValue={defaultValue ? dayjs(defaultValue) : null}
              onChange={(date) => {
                if (!date) {
                  field.onChange(null);
                  return;
                }
                field.onChange(dayjs(date).format(format));
              }}
              format={format}
              slotProps={{
                field: {
                  id: field.name,
                  clearable: true,
                },
                textField: {
                  placeholder,
                  error: fieldState.invalid,
                  helperText: fieldState.error?.message,
                },
              }}
              sx={{
                backgroundColor: "white",
              }}
            />
          </FormGroup>
        </FormControl>
      )}
    />
  );
};

export default FormInputDateField;
