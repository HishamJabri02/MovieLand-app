import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Map from './Map'
import SelectField from './SelectField'
import TextFieldAddress from './TextFieldAddress'
import { useForm } from 'react-hook-form'
import PhoneNumberAuth from '../../../../../components/Auth/PhoneNumberAuth'
import HomeContainer from '../../../../../components/Home/HomeContainer'
import GradiantButton from '../../../../../core/GradiantButton'
import Footer from '../../Footer/Page/Footer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountriesAsync } from '../state/getAllCountriesAsync'
import GradiantCirculeLoading from '../../../../../core/GradiantCirculeLoading'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getAllCitiesAsync } from '../state/getAllCitiesAsync'
import { getRegionsAsync } from '../state/getRegionsAsync'
function AddNewAdresses() {
    const {t,i18n}=useTranslation()
    const language= i18n.language
    const dispatch=useDispatch()
    const loadingCountries=useSelector((state)=>state.getAllCountriesReducer.loading)
    const countries=useSelector((state)=>state.getAllCountriesReducer.countries)
    const [country, setCountry] = useState(countries&& countries.length!==0 ? countries[0]:"");
    const cities=useSelector((state)=>state.getAllCitiesReducer.cities)
    const [city, setCity] = useState(cities&& cities.length!==0 ? cities[0] : "");
    const regions=useSelector((state)=>state.getRegionFromCityReducer.regions)
    const [region, setRegion] = useState(regions&& regions.length!==0 ? regions[0]:"");
    console.log(regions)
    useEffect(()=>{
        dispatch(getAllCountriesAsync())
    },[])
    useEffect(()=>{
    const countryId=countries.find((item)=>country===(item.name.en || item.name.ar))
    console.log(countryId)
    dispatch(getAllCitiesAsync(countryId?._id|| ""))
    },[country])
    useEffect(()=>{
      const cityId=cities.find((item)=>(item.name.en || item.name.ar)=== city)
      console.log(cityId)
      dispatch(getRegionsAsync(cityId?._id || ""))
    },[city])
    const { control }=useForm()
  return (
    <Box>
      <Navbar />
      <Typography
        sx={{
          fontFamily: "Lucida Bright !important",
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          p: 4,
        }}>
        Add New Address
      </Typography>
      {
        loadingCountries ? 
        <GradiantCirculeLoading/>
        :
        <>
          <HomeContainer >
      <Grid container sx={{display:"flex",my:2,mx:"auto"}} spacing={8}>
        <Grid item sx={{pt:"0px !important"}} lg={6} xs={12}>
        <Map/>
        </Grid>
        <Grid item lg={5} sx={{pt:"0px !important"}} xs={12}> 
        <form action="" style={{display:"flex",flexDirection:"column",gap:"15px"}}>
        <SelectField name="Country/Region" details={countries} age={country} setAge={setCountry} />
        <TextFieldAddress name="ContactName" label="Contact Name" control={control} />
        <PhoneNumberAuth
        name="phoneNumber"
        label="Phone Number"
        control={control}
        />
        <TextFieldAddress name="zipCode" label="Zip Code" control={control} />
        <TextFieldAddress name="street-address" label="Street Address" control={control} />
        <TextFieldAddress name="Apartment" label="Building/Floor/Apartment Number" control={control} />
        <SelectField name="City" details={cities} age={city} setAge={setCity} />
        <SelectField name="State / Province / Region" details={regions} age={region} setAge={setRegion} />
        <TextFieldAddress name="Additonal" label="Additional Instruction (Optional)" control={control} />
        <GradiantButton name="Save The Address" sx={{mt:2}}/>
        </form>
        </Grid>
        </Grid>
        </HomeContainer>
        <Footer/>
        </>
    }
      </Box>
  )
}

export default AddNewAdresses