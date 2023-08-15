import { Box, Button, TextField, Typography } from "@mui/material";
import GradiantButton from "../../../../../core/GradiantButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { changeUserApi } from "../api/changeUserApi";
function PersonalDetails({details = {}} , handleClose ) {
  const [fullName,setFullName]=useState(details?.name || "")
  const [emailpackage,setEmail]=useState(details?.email || "")
  const editData=async()=>{
    const response=await
    changeUserApi({
      name:fullName,
      email:emailpackage
    })
    if(response.success){
      handleClose()
    }
    else{
  
    }
  }
  return (
    <>
      <TextField
        id="standard-basic"
        label="Full Name"
        variant="standard"
        sx={{ width: "70%" }}
        defaultValue={fullName}
        onChange={(e)=>{
          setFullName(e.target.value)
        }}
      />
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        sx={{ width: "70%" }}
        defaultValue={emailpackage}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
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
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "50%",pt:2, }}>
        <GradiantButton name="Update" onClick={()=>{
       editData()
        }} />
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