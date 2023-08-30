import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import Map from "./Map";
import SelectField from "./SelectField";
import TextFieldAddress from "./TextFieldAddress";
import { useForm } from "react-hook-form";
import PhoneNumberAuth from "../../../../../components/Auth/PhoneNumberAuth";
import HomeContainer from "../../../../../components/Home/HomeContainer";
import GradiantButton from "../../../../../core/GradiantButton";
import Footer from "../../Footer/Page/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountriesAsync } from "../state/getAllCountriesAsync";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllCitiesAsync } from "../state/getAllCitiesAsync";
import { getRegionsAsync } from "../state/getRegionsAsync";
import { AddressesAsync } from "../state/AddressesAsync";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../../../../../core/CustomSnackbar";
function AddNewAdresses() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [lng, setLng] = useState(47.990341);
  const [lat, setLat] = useState(29.378586);
  const navigate = useNavigate();
  const loadingCountries = useSelector(
    (state) => state.getAllCountriesReducer.loading
  );
  const countries = useSelector(
    (state) => state.getAllCountriesReducer.countries
  );
  const [country, setCountry] = useState(
    countries && countries.length !== 0 ? countries[0] : ""
  );
  const cities = useSelector((state) => state.getAllCitiesReducer.cities);
  const [city, setCity] = useState(
    cities && cities.length !== 0 ? cities[0] : ""
  );
  const regions = useSelector(
    (state) => state.getRegionFromCityReducer.regions
  );
  const [region, setRegion] = useState(
    regions && regions.length !== 0 ? regions[0] : ""
  );

  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(getAllCountriesAsync());
  }, []);
  useEffect(() => {
    const countryId = countries.find(
      (item) => country === (item.name.en || item.name.ar)
    );
    dispatch(getAllCitiesAsync(countryId?._id || ""));
  }, [country]);
  useEffect(() => {
    const cityId = cities.find(
      (item) => (item.name.en || item.name.ar) === city
    );
    dispatch(getRegionsAsync(cityId?._id || ""));
  }, [city]);
  const { control, handleSubmit } = useForm();
  const loading = useSelector((state) => state.AddressesReducer.loading);
  const onSubmit = async (data) => {
    const countryId = countries.find(
      (item) => country === (item.name.en || item.name.ar)
    );
    const cityId = cities.find(
      (item) => (item.name.en || item.name.ar) === city
    );
    const regionId = regions.find(
      (item) => (item.name.en || item.name.ar) === region
    );
    let phone;
    const firstSpaceIndex = data.phone.indexOf(" ");
    if (data.phone[firstSpaceIndex + 1] === "0") {
      phone = data.phone.replace("0", "");
      phone = phone.replaceAll(" ", "");
    } else {
      phone = data.phone.replaceAll(" ", "");
    }
    if ((region && regionId) || (city && cityId) || (country && countryId)) {
      const location = {
        country: countryId._id,
        address: regionId._id,
        zipCode: parseInt(data?.zipCode || null),
        phone: phone,
        description: data?.description || null,
        additionalLocationInformation: data.Apartment,
        streetAddress: data.street,
        longitude: lng,
        latitude: lat,
      };
      const response = await dispatch(AddressesAsync(location));
      console.log(response);
      if (response?.payload?.success) {
        navigate("/adresses");
      } else {
        setOpen(true);
        setError(response.error.message);
      }
    } else {
      setOpen(true);
      setError("please Fill all require field");
    }
  };
  return (
    <Box>
      {loading && <GradiantCirculeLoading />}
      <Navbar />
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          p: 4,
        }}>
        {t("address.label")}
      </Typography>
      {loadingCountries ? (
        <GradiantCirculeLoading />
      ) : (
        <>
          <HomeContainer>
            <Grid
              container
              sx={{ display: "flex", my: 2, mx: "auto" }}
              spacing={8}>
              <Grid item sx={{ pt: "0px !important" }} lg={6} xs={12}>
                <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} />
              </Grid>
              <Grid item lg={5} sx={{ pt: "0px !important" }} xs={12}>
                <form
                  noValidate
                  action=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                  onSubmit={handleSubmit(onSubmit)}>
                  <SelectField
                    name="Country/Region"
                    details={countries}
                    age={country}
                    setAge={setCountry}
                  />
                  <TextFieldAddress
                    name="ContactName"
                    label="Contact Name"
                    control={control}
                    option={true}
                  />
                  <PhoneNumberAuth
                    name="phone"
                    label="Phone Number"
                    control={control}
                  />
                  <TextFieldAddress
                    name="zipCode"
                    label="Zip Code"
                    control={control}
                    option={true}
                  />
                  <TextFieldAddress
                    name="street"
                    label="Street Address"
                    control={control}
                    text="street-address is required"
                  />
                  <TextFieldAddress
                    name="Apartment"
                    label="Building/Floor/Apartment Number"
                    control={control}
                    text="Building/Floor/Apartment Number is required"
                  />
                  <SelectField
                    name="City"
                    details={cities}
                    age={city}
                    setAge={setCity}
                  />
                  <SelectField
                    name="State / Province / Region"
                    details={regions}
                    age={region}
                    setAge={setRegion}
                  />
                  <TextFieldAddress
                    name="description"
                    label="Additional Instruction (Optional)"
                    control={control}
                    option={true}
                  />
                  <GradiantButton
                    name="Save The Address"
                    sx={{ mt: 2 }}
                    type="submit"
                  />
                </form>
              </Grid>
            </Grid>
            <CustomSnackbar
              open={open}
              setOpen={setOpen}
              type="error"
              message={error}
            />
          </HomeContainer>
          <Footer />
        </>
      )}
    </Box>
  );
}

export default AddNewAdresses;
