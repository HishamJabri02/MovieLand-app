import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import arrayinfo from "../data/TermsAndConditionsInformation";
function TermsAndConditionInformation() {
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
      <Box sx={{ width: "70%", textAlign: "center" }}>
        We Hope That These Terms And Conditions Are Clear To All Users, And We
        Are Committed To Providing Our Services In A Transparent, Fair, And
        Legitimate Manner According To The Highest Ethical Standards And
        Practices
      </Box>
    </div>
  );
}
export default TermsAndConditionInformation;
