/* eslint-disable react/prop-types */
import { DateTime } from "luxon";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useTranslation } from "react-i18next";
export default function Date({ date, setDate }) {
  const luxonDate = date ? DateTime.fromJSDate(date) : null;
  const handleDateChange = (newValue) => {
    const newFormattedDate = newValue ? newValue.toFormat("dd-MM-yyyy") : "";
    setDate(newFormattedDate);
  };
  const {t}=useTranslation()
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={t("checkout.date")}
          value={luxonDate}
          onChange={(newValue) => handleDateChange(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
