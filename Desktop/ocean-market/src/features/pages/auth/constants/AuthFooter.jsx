/* eslint-disable react/prop-types */
import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import person from "../../../../assets/images/person.svg";
import { useTranslation } from "react-i18next";
const AuthFooter = ({ textLink, url, link }) => {
  const { t } = useTranslation();
  const handleClick=()=>{
    sessionStorage.setItem("guest","this is guest")
  }
  return (
    <>
      <Typography
        variant="body1"
        color="#707070"
        sx={{ justifyContent:"center", gap: 2,display:"flex" }}>
        {textLink}
        <Link to={url} style={{ color: "#095EF9",textDecoration:"none" }}>
          {link}
        </Link>
      </Typography>
      <Divider sx={{ color: "gray", gap: 2, fontSize: "1rem" }}>{t("auth.generall.or")}</Divider>
      <Link to={"/"} onClick={handleClick}>
        <Button
          variant="outlined"
          sx={{
            height: "50px",
            color: "black",
            border: "1px solid #B5B5B5",
            gap:1
          }}
          startIcon={<img src={person} />}
          fullWidth>
          {t("auth.links.guest")}
        </Button>
      </Link>
    </>
  );
};

export default AuthFooter;
