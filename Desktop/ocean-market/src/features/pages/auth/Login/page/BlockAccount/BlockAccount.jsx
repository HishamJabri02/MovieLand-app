/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import lock from "../../../../../../assets/images/lock.jpg";
import GradiantButton from "../../../../../../core/GradiantButton";
import "./BlockAccount.css";
import { useTranslation } from "react-i18next";
const BlockAccount = () => {
  const { t } = useTranslation();
  return (
    <div className="block-container">
      <div className="overlay"></div>
      <div className="container">
        <Box
          sx={{
            position: "absolute",
            width: { xs: "90%", sm: "60%", md: "37%" },
            height: "60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: { xs: 2, md: 4 },
            justifyContent: "space-around",
          }}>
          <img src={lock} alt="" className="lock" />
          <Typography
            variant="h6"
            fontSize="20px"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 4 }}>
            {t("auth.header.Block.title")}
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ mb: 2 }}>
          {t("auth.header.Block.subTitle")}
          </Typography>
          <GradiantButton name={t("buttons.support")} />
        </Box>
      </div>
    </div>
  );
};

export default BlockAccount;
