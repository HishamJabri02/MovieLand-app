/* eslint-disable react/prop-types */
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const TextFieldAuth = ({
  control,
  label,
  name,
  text = "text",
  props,
  icon = false,
  type,
}) => {
  const [show, setShow] = useState(false);
  const togglePassword = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState }) => {
        const inputProps = {};

        if (icon) {
          inputProps.endAdornment = (
            <InputAdornment position="end">
              <IconButton onClick={() => togglePassword()}>
                {show ? (
                  <VisibilityIcon fontSize="small" />
                ) : (
                  <VisibilityOffIcon fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          );
        }
        return (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                { borderColor: "red" },
              "& .MuiFormLabel-root.Mui-error": { color: "gray" },
              "& .MuiFormHelperText-root.Mui-error": { color: "red" },
              "& .MuiInputBase-root": {
                "&:hover:not(.Mui-disabled):before": {
                  borderBottom: "2px solid blue",
                },
              },
            }}
            variant="standard"
            value={field.value}
            label={label}
            error={fieldState.invalid}
            type={type === "password" ? (show ? "text" : "password") : "text"}
            helperText={fieldState.invalid ? text : null}
            {...field}
            {...props}
            InputProps={inputProps}
          />
        );
      }}
    />
  );
};

export default TextFieldAuth;
