import { Box, Typography } from "@mui/material";
import profile from "../../../../../assets/images/Profile.svg";
import { useSelector } from "react-redux";
function ProfileInformation() {
  const details=useSelector((state)=>(state.getUserReducer.details))
  return (
    <Box
      sx={{
        gap: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 1,
      }}>
      <img src={profile} alt="" width="50" height="50px" />
      <Typography
        sx={{
          fontWeight: "bold",
        }}>
       {details?.name || "test" }
      </Typography>
    </Box>
  );
}

export default ProfileInformation;
