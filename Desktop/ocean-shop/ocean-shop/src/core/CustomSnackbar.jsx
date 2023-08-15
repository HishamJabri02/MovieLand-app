/* eslint-disable react/prop-types */
import { Alert, Snackbar } from "@mui/material";
const CustomSnackbar = ({ message, type, open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        severity={type}
        sx={{ width: "100%", fontSize: { xs: "12px", sm: "16px" } }}>
        {message}{" "}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
