import developer from "../../../../../assets/images/developer.png";
import { Box, Typography } from "@mui/material";
function DeveloperInformationHeader() {
  return (
    <Box sx={{ mt: "40px", mb: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
          Developer Information
        </Typography>
        <Typography sx={{ marginBottom: "15px " }}>
          This Application Is Developed And Built By:
        </Typography>
        <img src={developer} style={{ width: "15%", margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default DeveloperInformationHeader;
