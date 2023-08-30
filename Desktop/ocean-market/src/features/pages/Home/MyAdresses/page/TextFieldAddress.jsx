/* eslint-disable react/prop-types */
import {TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
const TextFieldAddress = ({
  control,
  label,
  name,
  text = "text",
  props,
  option=false
}) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      rules={{required:option ?false :true }}
      render={({ field, fieldState }) => {
        const inputProps = {};
        return (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                { borderColor: "red" },
                "& .MuiFormLabel-root":{
                  right:language==="ar"?"0px":"unset",
                  transform:language==="ar"?"scale(1)":"",
                },
              "& .MuiFormLabel-root.Mui-error": { color: "gray"},
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
            type="text"
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

export default TextFieldAddress;
