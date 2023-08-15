import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
function SelectField({name,details,age,setAge}) {
    const {t,i18n}=useTranslation()
    const language= i18n.language
    const handleChange = (event) => {
      setAge(event.target.value);
        };
  return (
    <FormControl variant="standard" sx={{ width:"100%" }} disabled={details && details.length===0 ? true : false}>
    <InputLabel id="demo-simple-select-standard-label">{name}</InputLabel>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={language==="ar"? age?.name?.ar : age?.name?.en}
      onChange={handleChange}
      label={name}
    >
    {details && details.length!==0 && 
        details.map((item,index)=>(
         <MenuItem key={index} value={language==="ar"?item.name.ar :item.name.en}>{language==="ar" ? item.name.ar :item.name.en}</MenuItem>   
        ))
    }
    </Select>
  </FormControl> 
  )
}
export default SelectField