import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
// the component was made for responsive to have the ability to choose English or Arabic langauge
export default function AccordionLanguage() {
  const {t,i18n}=useTranslation()
  const language=i18n.language
  const [englishChecked, setEnglishChecked] = useState(language==="ar"?false:true);
  const [arabicChecked, setArabicChecked] = useState(language==="ar"?true:false);
  const handleEnglishClick = () => {
    i18n.changeLanguage("en");
    setEnglishChecked(true);
    setArabicChecked(false);
  };
  const handleArabicClick = () => {
    i18n.changeLanguage("ar");
    setArabicChecked(true);
    setEnglishChecked(false);
  };
  return (
    <Accordion sx={{ boxShadow: "none"}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ pl: 0 }}>
        {t("generall.lang")}
      </AccordionSummary>
      <AccordionDetails>
        <FormControlLabel
          control={
            <Checkbox checked={englishChecked} onClick={handleEnglishClick} />
          }
          label="English"
        />
        <FormControlLabel
          control={
            <Checkbox checked={arabicChecked} onClick={handleArabicClick} />
          }
          label="Arabic"
        />
      </AccordionDetails>
    </Accordion>
  );
}
// Todo if you can customize this component and make it one component Whether its responsive or web
