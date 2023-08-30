import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uploadImage } from "../../../../../../core/uploadImage";
import Footer from "../../../Footer/Page/Footer";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { useTranslation } from "react-i18next";
import { brandsAsync } from "../../state/brandsAsync";
import { useEffect } from "react";
import sad from "../../../../../../assets/images/error.svg"
function AllBrands() {
  const {i18n,t } = useTranslation();
  const language = i18n.language; 
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(brandsAsync());
  }, []);
   const allBrands = useSelector((state) => state.brandsReducer.brands);
  const loading = useSelector((state) => state.brandsReducer.loading);
  return (
    <>
      <Navbar />
      <Box>
      <Grid
        container
        spacing={4}
        sx={{
          mt: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 8 },
          gap: { xs: "10px" },
          pb: 2,
        }}>
         
        {loading ? (
               <Box sx={{ height:"calc(80vh - 130px )", position: "relative",width:"100%" }}>
               <GradiantCirculeLoading />
             </Box>
        ) : (
          allBrands.length > 0 ?
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
                pb: 1,
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
                  <Typography>
                    {language === "ar" ? item?.name_ar || item.name : item.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          )):
        <Box sx={{display:"flex",alignItems:"center",height:"calc(80vh - 130px )",flexDirection:"column",width:"100%",position:"relative",left:"16px",gap:"20px"}}>
        <img src={sad}/>
        <Typography sx={{fontWeight:"bold",width:"100%",fontSize:"20px",textAlign:"center"}}>No Brands Yet</Typography>
        </Box>
        )
      }
      </Grid>
      <Footer />
      </Box>
    </>
  );
}

export default AllBrands;
