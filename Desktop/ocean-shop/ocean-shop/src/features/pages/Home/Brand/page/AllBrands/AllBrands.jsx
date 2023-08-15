import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uploadImage } from "../../../../../../core/uploadImage";
import Footer from "../../../Footer/Page/Footer";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
function AllBrands() {
  const allBrands = useSelector((state) => state.brandsReducer.brands);
  const loading = useSelector((state) => state.brandsReducer.loading);
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={4}
        sx={{
          mt: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 8 },
          gap: { xs: "10px" },
          pb:2
        }}>
        {
       loading ? <GradiantCirculeLoading/> :
        allBrands.map((item) => (
          <Grid
            item
            lg={3.9}
            xs={12}
            sm={5.9}
            key={item._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pb:1
            }}>
            <Link
              to={`/brands/:${item._id}`}
              style={{
                position: "relative",
              }}>
              <Box>
                <img
                  src={uploadImage(item.imageCover)}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "40px",
                    aspectRatio: "16/9",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  transition: ".3s",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "15px",
                  position: "absolute",
                  bottom: "-40px",
                }}>
                <img
                  src={uploadImage(item.imageLogo)}
                  alt=""
                  style={{
                    width: "23%",
                    borderRadius: "100%",
                    filter: " drop-shadow(2px 4px 3px gray)",
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                />
                <Typography>{item.name}</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default AllBrands;
