/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
const AuthHeader = ({ textOne, textTwo }) => {
  return (
    <>
      <Typography variant="h6" fontSize="28px" fontWeight="bold">
        {textOne}
      </Typography>
      <Typography variant="body2" color="#707070">
        {textTwo}{" "}
      </Typography>
    </>
  );
};
export default AuthHeader;
