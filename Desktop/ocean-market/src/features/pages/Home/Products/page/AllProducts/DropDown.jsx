/* eslint-disable react/prop-types */
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
export default function DropDown({ age, handleChange }) {
  const {t}=useTranslation()
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={"New_Arrival"}>{t("home.titles.new")}</MenuItem>
          <MenuItem value={"Top_Rated"}>{t("home.titles.top")}</MenuItem>
          <MenuItem value={"Offers"}>{t("home.titles.offers")}</MenuItem>
          <MenuItem value={"Price_ASC"}>{t("home.titles.price-highest")}</MenuItem>
          <MenuItem value={"Price_DESC"}>{t("home.titles.price-lowest")}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
