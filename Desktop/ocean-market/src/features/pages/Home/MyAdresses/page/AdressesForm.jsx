/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Backdrop, Box, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import GradiantButton from "../../../../../core/GradiantButton";
import { useState } from "react";
import { getRegionsForCity } from "../api/getRegionsForCity";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { useForm, Controller } from "react-hook-form";
import { postSavedLocation } from "../api/postSavedLocation";

export default function AdressesForm({ open, handleClose }) {
  const cities = useSelector((state) => state.getAllCitiesReducer.cities);
  const [city, setCity] = useState("");
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = async (event) => {
    const selectedCity = cities.find(
      (item) => item.name.en === event.target.value
    );
    setCity(selectedCity || cities[0]);
    setRegions([]);
    setLoading(true);
    try {
      const response = await getRegionsForCity(
        selectedCity?._id || cities[0]._id
      );
      setRegions(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleRegion = (event) => {
    const selectedRegion = regions.find(
      (item) => item.name.en === event.target.value
    );
    const newRegion = {
      id: selectedRegion?._id || "",
      value: event.target.value,
    };
    setRegion(newRegion);
  };
  const onSubmit = async (data) => {
    const response = await postSavedLocation({
      address: region.id,
      phone: data.phoneNumber,
      description: data.regionStreetFloor,
      closeTo: data.closeTo,
      houseNumber: data.houseNumber,
    });
    console.log(response);
    if (response.success) {
      handleClose();
    }
  };

  return (
    <Backdrop open={open} sx={{ width: "100%", height: "100%", zIndex: "7" }}>
      <Box sx={{ width: "50%", minHeight: "86%", backgroundColor: "#fff" }}>
        <Box
          sx={{ padding: 4, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "20px" }}>Add New Address</Typography>
          <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}>
          {cities && cities.length !== 0 && (
            <>
              <FormControl variant="standard" sx={{ m: 1, width: "80%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={city.name?.en || ""}
                  onChange={handleChange}
                  label="Country">
                  {cities.map((item, index) => (
                    <MenuItem value={item.name?.en} key={index}>
                      {item.name.en}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                }}>
                {loading ? (
                  <GradiantCirculeLoading />
                ) : regions && regions.length !== 0 ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      gap: "20px",
                    }}>
                    <FormControl variant="standard" sx={{ m: 1, width: "80%" }}>
                      <InputLabel id="demo-simple-select-standard-label">
                        Region
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={region.value}
                        onChange={handleRegion}
                        label="Region"
                        required // add the required prop
                      >
                        {regions.map((item, index) => (
                          <MenuItem
                            value={item.name?.en}
                            key={index}
                            id={item._id}>
                            {item.name.en}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="standard-basic"
                          label="Phone Number"
                          variant="standard"
                          sx={{ width: "80%" }}
                          error={errors.phoneNumber ? true : false}
                          helperText={
                            errors.phoneNumber && "Phone Number is required"
                          }
                          inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            maxLength: 10, // set maximum length of the input to 10 digits
                          }}
                        />
                      )}
                    />
                    <Controller
                      name="regionStreetFloor"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="standard-basic"
                          label="Region/Street/Floor *"
                          variant="standard"
                          sx={{ width: "80%" }}
                          error={errors.regionStreetFloor ? true : false}
                          helperText={
                            errors.regionStreetFloor &&
                            "Region/Street/Floor is required"
                          }
                        />
                      )}
                    />
                    <Controller
                      name="closeTo"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="standard-basic"
                          label="Close To"
                          variant="standard"
                          sx={{ width: "80%" }}
                          error={errors.regionStreetFloor ? true : false}
                          helperText={
                            errors.regionStreetFloor && "Close To is required"
                          }
                        />
                      )}
                    />
                    <Controller
                      name="houseNumber"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="standard-basic"
                          label="House Number"
                          variant="standard"
                          sx={{ width: "80%" }}
                          error={errors.regionStreetFloor ? true : false}
                          helperText={
                            errors.regionStreetFloor &&
                            "houseNumber is required"
                          }
                        />
                      )}
                    />
                    <GradiantButton
                      type="submit"
                      sx={{ width: "40%" }}
                      name="Save The Address"
                    />
                  </form>
                ) : (
                  <Typography sx={{ fontSize: "16px" }}>
                    Please select a city that has regions.
                  </Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Backdrop>
  );
}
