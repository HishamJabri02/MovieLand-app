/* eslint-disable react/prop-types */
import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import person from "../../../../assets/images/person.svg";
const AuthFooter = ({ textLink, url, link }) => {
  return (
    <>
      <Typography
        variant="body1"
        color="#707070"
        sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        {textLink}
        <Link to={url} style={{ color: "#095EF9" }}>
          {link}
        </Link>
      </Typography>
      <Divider sx={{ color: "gray", gap: 2, fontSize: "1rem" }}>Or</Divider>
      <Link to={{ pathname: "/", search: "?guest=true" }}>
        <Button
          variant="outlined"
          sx={{
            height: "50px",
            color: "black",
            border: "1px solid #B5B5B5",
          }}
          startIcon={<img src={person} />}
          fullWidth>
          Continue As A Guest
        </Button>
      </Link>
    </>
  );
};

export default AuthFooter;
