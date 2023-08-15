import arrayInformation from "../data/DeveloperInformationDetails";
import { Box, Grid, Typography } from "@mui/material";
function DeveloperInformationDetails() {
  return (
    <>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "10px",
          textAlign: "center",
        }}>
        Conact With Us:
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: "center",
          gap: "15px",
          px: { xs: 2, sm: 4, md: 6, lg: 14 },
        }}>
        {arrayInformation.map((item) => (
          <Grid
            item
            key={item.id}
            lg={3.9}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              border: "1px solid #eee",
              borderRadius: "10px",
              padding: 4,
              transition: ".3s",
              ":hover": {
                border: "1px solid blue",
              },
            }}>
            <img
              src={item.icon}
              style={{ width: "24px", marginRight: "20px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                color: "#777",
                lineHeight: "1.8",
              }}>
              <Typography>{item.name}</Typography>
              <Typography>{item.explain}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default DeveloperInformationDetails;
