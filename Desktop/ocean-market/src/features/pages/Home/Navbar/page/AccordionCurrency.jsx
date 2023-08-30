import { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { currencyAsync } from "../state/currencyAsync";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function AccordionCurrency() {
    const {t,i18n}=useTranslation()
    const language=i18n.language
    const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(currencyAsync())
    },[])
    const handleChangeCurrency=(item)=>{
    if(localStorage.getItem("curr")===item._id){
        return
    }else{
        localStorage.setItem("curr",item._id)
        location.reload()
    }
    }
    const currency=useSelector((state)=>state.CurrencyReducer.currency)
  return (
    <Accordion sx={{ boxShadow: "none"}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ pl: 0 }}>
        {t("generall.curr")}
      </AccordionSummary>
      <AccordionDetails>
        {currency.map((item)=>(
        <FormControlLabel key={item._id}
        control={
        <Checkbox checked={localStorage.getItem("curr") ? localStorage.getItem("curr")===item._id :item?.isDefault} onClick={()=>handleChangeCurrency(item)}/>
               }
     label={`${language==="ar" ?item.name_ar :item.name_en}`}
            />
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
