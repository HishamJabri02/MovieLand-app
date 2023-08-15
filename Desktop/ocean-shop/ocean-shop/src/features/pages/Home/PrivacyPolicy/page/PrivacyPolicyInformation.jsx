/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import arrayinfo from "../data/PrivacyPolicyDetails";
function PrivacyPolicyInformation() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      {arrayinfo.map((item) => (
        <Box key={item.id} sx={{ width: "70%", marginBottom: "10px" }}>
          <h5 style={{ marginBottom: "10px" }}>
            {item.id}. {item.head}
          </h5>
          <Typography
            sx={{ marginBottom: "10px", lineHeight: "1.8", fontWeight: "400" }}>
            {item.explain}
          </Typography>
        </Box>
      ))}
      <Box sx={{ width: { xs: "100%", sm: "60%" }, textAlign: "center" }}>
        " We Hope That This Policy Has Clarified How We Collect, Use, And
        Protect Users' Personal Information In Our Application. We Are Committed
        To Maintaining Users' Trust In Us And Complying With The Highest
        Standards Of Privacy And Security."
      </Box>
    </div>
  );
}
export default PrivacyPolicyInformation;
