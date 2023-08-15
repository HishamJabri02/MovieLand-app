import { Box, Button, TextField, Typography } from "@mui/material";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link } from "react-router-dom";
function PersonalDetails({details = {}}) {
  return (
    <>
      <TextField
        id="standard-basic"
        label="Full Name"
        variant="standard"
        sx={{ width: "70%" }}
        defaultValue={details?.name || ''}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        sx={{ width: "70%" }}
        defaultValue={details?.email || ''}
      />
      <TextField
        id="standard-basic"
        label="PhoneNumber"
        variant="standard"
        defaultValue={details?.phoneNumber || ''}
        sx={{ width: "70%" }}
        disabled
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "50%" }}>
        <GradiantButton name="Update" />
        <Button variant="outlined" sx={{ padding: 1 }}>
          Change Password
        </Button>
      </Box>
      <Typography>
        Do You Want To Delete Your Account?
        <Link style={{ color: "blue" }}> ClickHere</Link>
      </Typography>      
    </>
  );
}

export default PersonalDetails;