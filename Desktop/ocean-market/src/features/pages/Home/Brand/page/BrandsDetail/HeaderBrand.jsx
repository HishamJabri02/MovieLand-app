/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { uploadImage } from "../../../../../../core/uploadImage";

function HeaderBrand({ brandImage, brandLogo, information, brandName }) {
  return (
    <Box>
      <Box>
        <img
          src={uploadImage(brandImage)}
          alt=""
          style={{
            width: "100%",
            objectFit: "cover",
            height: "400px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          bottom: "70px",
          transition: ".3s",
          flexDirection: "column",
          gap: "15px",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", md: "normal" },
          paddingLeft: { xs: "0", md: "80px" },
        }}>
        <img
          src={uploadImage(brandLogo)}
          alt=""
          style={{
            width: "150px",
            borderRadius: "100%",
            filter: " drop-shadow(2px 4px 3px gray)",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
        <Typography
          sx={{ paddingLeft: "20px", fontSize: "25px", fontFamily: "none" }}>
          {brandName}
        </Typography>
        <Typography variant="subtitle1" sx={{ paddingLeft: "20px" }}>
          {information}
        </Typography>
      </Box>
    </Box>
  );
}

export default HeaderBrand;
