import { Box, Typography } from "@mui/material";
import terms from "../../../../../assets/images/TermsandCondition.png";

function TermsAndConditionHeader() {
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px " }}>
          Terms And Condition
        </Typography>
        <Typography sx={{ marginBottom: "15px " }}>
          Here Are The Terms And Condition For E-Commerce Application:
        </Typography>
        <img src={terms} style={{ width: "15%", margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default TermsAndConditionHeader;
