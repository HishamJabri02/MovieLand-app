/* eslint-disable react/prop-types */
import {
    Box,
    Divider,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
  } from "@mui/material";
    import { useState } from "react";
    import { useTranslation } from "react-i18next";
    import LanguageIcon from '@mui/icons-material/Language';
import { useEffect } from "react";
import { currencyAsync } from "../state/currencyAsync";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../../../core/uploadImage";
  function CurrencyItems() {
    const {t}=useTranslation()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const dispatch=useDispatch()
    const handleClose = () => {
      setAnchorEl(null);
    };  
    useEffect(()=>{
    dispatch(currencyAsync())
    },[])
    const handleChangeCurrency=(item)=>{
    if(localStorage.getItem("curr")===item._id){
        return
    }else{
        localStorage.setItem("curr",item._id)
        location.reload()
    }
    }
    const currency=useSelector((state)=>state.CurrencyReducer.currency)
    return (
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title={t("navbar.icons.language")}>
            <LanguageIcon 
            onClick={handleClick}
         sx={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}/>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              minWidth: "290px",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
          <Typography sx={{p:2,fontWeight:"bold"}}>Currency</Typography>
          {currency.map((item)=>(
            <MenuItem key={item._id} onClick={()=>handleChangeCurrency(item)}>
       <Box sx={{display:"flex",alignItems:"center",px:2,py:1,cursor:"pointer"}}>
        <img src={uploadImage(item.flag)} alt="" width="30px" />
        <Typography sx={{pl:1,color:localStorage.getItem("curr") ? localStorage.getItem("curr")===item._id ?"blue":"black":item.isDefault ? "blue" : "black",transition:".3s",":hover":{
            color:"blue"
        }}}>{item.name_en} ( {item.code_en} )</Typography>
       </Box>
       <Divider/>
       </MenuItem>
            
          ))}
        </Menu>
      </Box>
    );
  }
  
  export default CurrencyItems;
  