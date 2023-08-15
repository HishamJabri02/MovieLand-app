import { Box, Grid, Link, Typography } from "@mui/material";
import FooterAddress from "./FooterAddress";
import { ResourcesData } from "../data/ResourcesData";
import { LegalData } from "../data/LegalData";
import { LinksData } from "../data/LinksData";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from "react-i18next";
import appStore from "../../../../../assets/images/AppStore.svg"
import googlePlay from "../../../../../assets/images/GooglePlay.svg"
function Footer() {
  const { i18n,t } = useTranslation();
  const language = i18n.language;
  return (
    <Box>
    <Box sx={{ bgcolor: "#f2f2f2", py: 4, mt: 4, px: { xs: 2, md: 6 },direction:language==="ar"?"rtl":"ltr" }}>
      <Grid container  spacing={2}>
        <Grid item xs={12} sm={6} lg={2.4}>
          <FooterAddress />
        </Grid>
        <Grid item xs={12} sm={6} lg={2.4}>
          <Typography variant="h6" component="h2" gutterBottom sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:"bold"}}>
            {t("footer.links.resource")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
             
            }}>
            {ResourcesData.map((item) => (
              <Link
              key={item.id}
              href={item.url}
                variant="body1"
                sx={{ my: 0.5, textDecoration: "none", color: "black",fontSize:{xs:"14px",sm:"16px"} }}>
                {t(`footer.links.${item.name}`)}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.4}>
          <Typography variant="h6" component="h2" gutterBottom sx={{fontSize:{xs:"16px",sm:"18px"},fontWeight:"bold"}}>
          {t("footer.links.legal")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            {LegalData.map((item) => (
              <Link
              key={item.id}
              href={item.url}
              variant="body1"
              sx={{ my: 0.5, textDecoration: "none", color: "black",fontSize:{xs:"14px",sm:"16px"} }}>
             {t(`footer.links.${item.name}`)}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.4}>
          <Typography variant="h6" component="h2" gutterBottom sx={{fontSize:{xs:"16px",sm:"18px"}}} >
            {t("footer.links.follow")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            {LinksData.map((item) => (
              <Box
              key={item.id}
              sx={{
                mr: 1,
                display: "flex",
              }}>
                <Link
                  href={item.url}
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: 0.5,
                    textDecoration: "none",
                    color: "black",
                    fontSize:{xs:"14px",sm:"16px"},alignItems:"center"
                  }}>
                  <img src={item.img} alt={item.name} style={{
                    width:"30px"
                  }} />
                  <Typography sx={{fontSize:"12px"}}>{item.name}</Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.4} >
          <Typography variant="h6" component="h2" gutterBottom sx={{fontSize:{xs:"16px",sm:"18px"}}}>
            {t("footer.links.download")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
                <Link
                  href="https://apps.apple.com/kw/app/ocean-market/id6450056202"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: 0.5,
                    textDecoration: "none",
                    color: "black",
                    fontSize:{xs:"14px",sm:"16px"}
                  }}>
                  <img src={appStore} width="150px" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.oceansoft.oceanecommercemarketapplication"
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: 0.5,
                    textDecoration: "none",
                    color: "black",
                    fontSize:{xs:"14px",sm:"16px"}
                  }}>
                  <img src={googlePlay} width="150px" />
                </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{height:"40px",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"flex-end",px:{xs:"35px",md:"180px"}}}>
      <Typography sx={{color:"#fff",display:"flex",justifyContent:"flex-end",fontSize:{xs:"12px",md:"14px"},gap:"8px"}}>Made with <FavoriteIcon sx={{color:"#fff",fontSize:"18px"}}/>By Ocean Soft</Typography>
    </Box>
    </Box>
  );
}
export default Footer;
