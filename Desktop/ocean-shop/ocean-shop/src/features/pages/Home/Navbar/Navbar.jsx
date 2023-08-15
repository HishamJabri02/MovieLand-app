/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import HomeContainer from "../../../../components/Home/HomeContainer";
import NavbarAddress from "./page/NavbarAddress";
import NavbarItems from "./page/NavbarItems";
import GradiantButton from "../../../../core/GradiantButton";
import DropDown from "./constants/DropDown";
import IconGroup from "./page/IconGroup";
import MenuItems from "./page/MenuItems";
import PersonalInformation from "../PersonalInformation/page/PersonalInformation";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return (
    <>
    <HomeContainer
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 6px 0px gray",
      }}>
      <MenuItems />
      <NavbarAddress />
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 5,
          flexBasis: "44%",
          height: "100%",
        }}>
        <NavbarItems menu={false} />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: { xs: "center", md: "flex-end" },
          flexBasis: { xs: "0%", sm: "33%", md: "50%", lg: "25%" },
          alignItems: "center",
          gap: 1,
          mr: { sm: 2, lg: 0 },
        }}>
        {!token && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexBasis: { xs: "65", sm: "60%", md: "35%", lg: "70%" },
              gap: "10px",
            }}>
            <Button
              sx={{
                flexBasis: "50%",
                width: "100%",
                height: "45px",
                color: "black",
                "&:hover": {
                  color: "blue",
                },
              }}>
              Sign In
            </Button>
            <GradiantButton
              name="Register"
              sx={{ height: "45px", borderRaduis: "12px", flexBasis: "50%" }}
              />
          </Box>
        )}
        <Box sx={{ display: { xs: "none", lg: "block" }, opacity: "0" }}>
          <DropDown />
        </Box>
      </Box>
      <IconGroup handleOpen={handleOpen} />
    </HomeContainer>
    <PersonalInformation open={open} handleClose={handleClose} />
        </>
  );
};
export default Navbar;

// import { useState } from "react";
// import { Box, Button } from "@mui/material";
// import HomeContainer from "../../../../components/Home/HomeContainer";
// import NavbarAddress from "./page/NavbarAddress";
// import NavbarItems from "./page/NavbarItems";
// import GradiantButton from "../../../../core/GradiantButton";
// import DropDown from "./constants/DropDown";
// import IconGroup from "./page/IconGroup";
// import MenuItems from "./page/MenuItems";
// const Navbar = () => {
//   const token =
//     localStorage.getItem("token") || sessionStorage.getItem("token");
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const handleSearchClick = () => {
//     setIsSearchOpen(true);
//     if (window.innerWidth <= 600) {
//       setIsMobile(true);
//     }
//   };
//   const handleSearchClose = () => {
//     setIsSearchOpen(false);
//     setIsMobile(false);
//   };
//   return (
//     <HomeContainer
//       sx={{
//         width: "100%",
//         height: "80px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         boxShadow: "0px 0px 6px 0px gray",
//       }}>
//       <MenuItems />
//       <NavbarAddress isMobile={isMobile} />
//       <Box>
//         <div>
//           <input type="text" placeholder="Search" />
//         </div>
//       </Box>
//       <Box
//         sx={{
//           display: { xs: "none", lg: "flex" },
//           alignItems: "center",
//           justifyContent: "flex-end",
//           gap: 5,
//           flexBasis: "44%",
//           height: "100%",
//         }}>
//         <NavbarItems menu={false} />
//       </Box>
//       <Box
//         sx={{
//           display: { xs: "none", sm: "flex" },
//           justifyContent: { xs: "center", md: "flex-end" },
//           flexBasis: { xs: "0%", sm: "33%", md: "50%", lg: "25%" },
//           alignItems: "center",
//           gap: 1,
//           mr: { sm: 2, lg: 0 },
//         }}>
//         {!token && !isSearchOpen && (
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               flexBasis: { xs: "65", sm: "60%", md: "35%", lg: "70%" },
//               gap: "10px",
//             }}>
//             <Button
//               sx={{
//                 flexBasis: "50%",
//                 width: "100%",
//                 height: "45px",
//                 color: "black",
//                 "&:hover": {
//                   color: "blue",
//                 },
//               }}>
//               Sign In
//             </Button>
//             <GradiantButton
//               name="Register"
//               sx={{ height: "45px", borderRaduis: "12px", flexBasis: "50%" }}
//             />
//           </Box>
//         )}
//         {!isSearchOpen && (
//           <Box sx={{ display: { xs: "none", lg: "block" } }}>
//             <DropDown />
//           </Box>
//         )}
//       </Box>
//       <IconGroup handleSearchClick={handleSearchClick} />
//     </HomeContainer>
//   );
// };

// export default Navbar;
