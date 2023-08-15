import { Box, Typography } from "@mui/material";
import privacy from "../../../../../assets/images/Privacy-policy.png";
function PrivacyPolicyHeader() {
  return (
    <Box sx={{ margin: "20px 0" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            marginBottom: "10px ",
            mt: 2,
          }}>
          Privacy Policy
        </Typography>
        <Typography
          sx={{ marginBottom: "15px", textAlign: "center", width: "60%" }}>
          At Our Application, We Value The Privacy Of Our Users, And We Handle
          The Personal Information They Provide Us With The Utmost
          Confidentiality And Security. We Are Committed To Complying With All
          Applicable Laws And Regulations Related To Privacy And Personal Data
          Protection.
        </Typography>
        <img src={privacy} style={{ width: "160px", margin: "10px 0" }} />
      </Box>
    </Box>
  );
}
export default PrivacyPolicyHeader;
