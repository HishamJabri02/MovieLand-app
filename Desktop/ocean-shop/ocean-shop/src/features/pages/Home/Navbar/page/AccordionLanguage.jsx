import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// the component was made for responsive to have the ability to choose English or Arabic langauge
export default function AccordionLanguage() {
  const [englishChecked, setEnglishChecked] = useState(true);
  const [arabicChecked, setArabicChecked] = useState(false);
  const handleEnglishClick = () => {
    setEnglishChecked(true);
    setArabicChecked(false);
  };
  const handleArabicClick = () => {
    setArabicChecked(true);
    setEnglishChecked(false);
  };
  return (
    <Accordion sx={{ boxShadow: "none", display: "none" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ pl: 0 }}>
        Language
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
