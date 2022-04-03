import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as styledComp from "./MUITextField.style";
import { TextField } from "@mui/material";
import { MUITextFieldProps } from "../../../types/application.type";
import { TextFieldsOutlined } from "@mui/icons-material";
import { Controller } from "react-hook-form";

export default function MUITextField({
  label,
  name,
  control,
  defaultValue = "",
  required,
  errors,
}: MUITextFieldProps) {
  const requiredLabel = `${label} *`;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type="text"
          label={required ? requiredLabel : label}
          variant="outlined"
          error={!!errors}
          helperText={errors ? errors?.message : ""}
        />
      )}
    />
  );
}
