import { Box, Typography } from "@mui/material"
import notification from "../../../../../assets/images/notification.png"
function NotificationEmpty() {    
  return (
    <Box sx={{height:"100%",display:"flex",alignItems:"center"}}>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}}>
    <img src={notification} alt="" width="60px" />
    <Typography sx={{fontWeight:"600",fontSize:"15px"}}>No Notices Right Now!</Typography>
    <Typography sx={{fontSize:"12px",color:"gray",textAlign:"center"}}>You Have Currently No Notifications. We Will Notify 
You When Something New Arrives!</Typography>
      </Box>
    </Box>
  )
}
export default NotificationEmpty