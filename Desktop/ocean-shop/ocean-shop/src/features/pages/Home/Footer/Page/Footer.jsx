import { Box, Grid, Link, Typography } from "@mui/material";
import FooterAddress from "./FooterAddress";
import { ResourcesData } from "../data/ResourcesData";
import { LegalData } from "../data/LegalData";
import { LinksData } from "../data/LinksData";
function Footer() {
  return (
    <Box sx={{ bgcolor: "#f2f2f2", py: 4, mt: 4, px: { xs: 2, md: 6 } }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FooterAddress />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Resources
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
                sx={{ my: 0.5, textDecoration: "none", color: "black" }}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Legal
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
                sx={{ my: 0.5, textDecoration: "none", color: "black" }}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            Follow Us
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
                  }}>
                  <img src={item.img} alt={item.name} />
                  <Typography>{item.name}</Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
