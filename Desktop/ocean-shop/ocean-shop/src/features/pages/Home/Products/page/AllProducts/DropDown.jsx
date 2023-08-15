/* eslint-disable react/prop-types */
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function DropDown({ age, handleChange }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={age} onChange={handleChange}>
          <MenuItem value={"New_Arrival"}>New Arrival</MenuItem>
          <MenuItem value={"Top_Rated"}>Top Raterd</MenuItem>
          <MenuItem value={"Offers"}>Special Offers</MenuItem>
          <MenuItem value={"Price_ASC"}>Price From Highest to Lowest</MenuItem>
          <MenuItem value={"Price_DESC"}>Price From Lowest to Highest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
