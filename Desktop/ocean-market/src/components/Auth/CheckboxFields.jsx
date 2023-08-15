/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
const CheckboxFields = ({ name, control, label }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
          sx={{m:0}}
            control={<Checkbox {...field} defaultChecked sx={{ zIndex: -1 }} />}
            label={label}
          />
        )}
      />
    </>
  );
};

export default CheckboxFields;
