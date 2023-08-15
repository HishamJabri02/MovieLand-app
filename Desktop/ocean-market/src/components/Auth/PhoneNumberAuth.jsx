/* eslint-disable react/prop-types */
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
const PhoneNumberAuth = ({
  control,
  label,
  name,
  text = "text",
  props,
}) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Controller
      defaultValue="+965"
      name={name}
      control={control}
      rules={{required: true, validate: matchIsValidTel }}
      render={({ field, fieldState }) => {
        const inputProps = {};
        return (
          <MuiTelInput
          sx={{
            "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
            { borderColor: "red" },
            "& .MuiFormLabel-root.Mui-error": { color: "gray" },
            "& .MuiFormLabel-root":{
              top:"-5px",
              right:language==="ar"?"0px":"unset",
              transform:language==="ar"?"scale(1)":"",
            },
            "& .MuiFormHelperText-root.Mui-error": { color: "red" },
            "& .MuiInputBase-root": {
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "2px solid blue",
              },
            },
          }}
          {...field}
          disableCountryCode={true}
          variant="standard"
          value={field.value}
          label={label}
          error={fieldState.invalid}
          type="text"
          helperText={fieldState.invalid ? text : null}
          InputProps={inputProps}
          defaultCountry="kw"
          {...props}
          />
      )}}
    />
  );
};
export default PhoneNumberAuth;
