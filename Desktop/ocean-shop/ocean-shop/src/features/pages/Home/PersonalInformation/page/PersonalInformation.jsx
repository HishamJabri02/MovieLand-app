/* eslint-disable react/prop-types */
import { Backdrop, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonalImage from "./PersonalImage";
import PersonalDetails from "./PersonalDetails";
import { useEffect} from "react";
import { getUserAsync } from "../state/getUserAsync";
import {useDispatch, useSelector} from "react-redux"
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
function PersonalInformation({ open, handleClose }) {
  const dispatch=useDispatch()
  useEffect(()=>{ 
    dispatch(getUserAsync())
  },[])
  const details=useSelector((state)=>state.getUserReducer.details)
  const loading=useSelector((state)=>state.getUserReducer.loading)
  return (
    <Backdrop open={open} sx={{ zIndex: "6" }}>
      <Box sx={{ width: "50%", height: "86%", backgroundColor: "#fff" }}>
        <Box
          sx={{ padding: 4, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "20px" }}>Personal Profile</Typography>
          <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}>
          {
            loading ?<GradiantCirculeLoading/> :
            <PersonalImage details={details} />
          }
          {
loading ?<GradiantCirculeLoading/> :
          <PersonalDetails details={details} />
          }
        </Box>
      </Box>
    </Backdrop>
  );
}
export default PersonalInformation;
