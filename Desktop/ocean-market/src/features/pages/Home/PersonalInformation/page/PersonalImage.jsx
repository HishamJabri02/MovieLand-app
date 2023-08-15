import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import profile from "../../../../../assets/images/profile.png";
import { useState } from "react";
import { uploadImage } from "../../../../../core/uploadImage";
function PersonalImage({details}) {
  const [imageUrl, setImageUrl] = useState(details?.photo_url ? uploadImage(details.photo_url) : null)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        aspectRatio: "1/1",
        borderRadius: "100%",
        border: "1px solid blue",
        position: "relative",
      }}>
      <img
        src={imageUrl ? imageUrl : profile}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
          borderRadius: "100%",
          objectPosition: "right",
        }}
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="label"
        sx={{
          width:"30px",
          height:"30px",
          position: "absolute",
          right: "10px",
          bottom: "-6px",
          backgroundColor: "#fff",
          border: "1px solid blue",
          "&:hover": {
            backgroundColor: "#fff !important",
          },
        }}>
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={handleFileUpload}
        />
        <EditIcon sx={{fontSize:"18px"}} />
      </IconButton>
    </Box>
  );
}
export default PersonalImage;
