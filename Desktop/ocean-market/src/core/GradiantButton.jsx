/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
const GradiantButton = ({ name, sx, disabled, ...props }) => {
  return (
    <Button
      disabled={disabled}
      sx={{
        height: "50px",
        backgroundImage: disabled
          ? ""
          : "linear-gradient(to left, #4BE1EC 0%, #9931D6 50%, #DC136E 100%)",
        color: "#fff",
        backgroundColor: disabled ? "gray" : "",
        fontWeight: "bold",
        ...sx,
      }}
      fullWidth
      {...props}>
      {name}
    </Button>
  );
};
export default GradiantButton;
