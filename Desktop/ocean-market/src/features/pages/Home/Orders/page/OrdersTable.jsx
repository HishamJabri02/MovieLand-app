import React from 'react'
import { dataGrids } from '../data/dataGrids'
import { Box, Grid, Typography } from '@mui/material'
import { uploadImage } from '../../../../../core/uploadImage'
function OrdersTable({details}) {
  return (
    <Box sx={{px:4}}>
    <Grid container sx={{backgroundColor:"#F4F4F4",mt:4}}>
        {dataGrids.map((item,index)=>(
            <Grid item key={index} lg={1.714} sx={{textAlign:"center",padding:1.7,fontWeight:"bold"}}>{item}</Grid>
        ))}
    </Grid>
    <Grid container>
        {details.map((item,index)=>{
            const date=new Date(item.createdAt)
            const day = date.getUTCDate();
            const month = date.getUTCMonth() + 1; 
            const year = date.getUTCFullYear();
            let hour = date.getUTCHours();
            const minute = date.getUTCMinutes();
            const amOrPm = hour >= 12 ? "PM" : "AM";
            hour = hour % 12 || 12;
            const formattedDate = `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;
            const formattedTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${amOrPm}`;
            const formattedDateTime = `${formattedDate} / ${formattedTime}`;

            return(
                <>
                <Grid item lg={12} key={index} sx={{p:.8,pl:4,border:"1px solid #E8E8E8",fontWeight:"bold"}}>{formattedDateTime}</Grid>
                <Grid item lg={1.714} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center"}}><img src={uploadImage(item.cart.items[0].product_id.image_cover)} style={{width:"110px",height:"110px",objectFit:"cover",borderRadius:"10px"}} /></Grid>            
                <Grid item lg={1.714} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}><Typography sx={{  textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "pre",}}>{item._id}</Typography></Grid>
            <Grid item lg={1.714} key={index} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>{item.cart.quantity}</Grid>
            <Grid item lg={1.714} key={index} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>{item.cart.total_price_after_discount} KWD</Grid>
            <Grid item lg={1.714} key={index} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"}}>{!item.isActive ? "Not Sent" : item.isActive || item.status==="pending"?"Processed":item.isActive || item.status==="Done"?"Arrived":"Cancelled"}</Grid>
            <Grid item lg={1.714} key={index} sx={{p:2,border:"1px solid #E8E8E8",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",color:item.isActive || item.status==="pending"?"blue":item.isActive || item.status==="Done"?"blue":"black",
}}>
                {item.isActive || item.status==="pending"?"Pending":item.isActive || item.status==="Done"?"Done":"-----------"}
                </Grid>     
            </>
            )

        }
            )}
    {/* {dataGrids.map((item,index)=>(
            <Grid item key={index} lg={1.714} sx={{textAlign:"center",border:"1px solid #E8E8E8"}}>{item}</Grid>
        ))} */}
    </Grid>
    </Box>
  )
}

export default OrdersTable