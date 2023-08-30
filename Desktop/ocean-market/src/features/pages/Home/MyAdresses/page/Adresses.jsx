import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import "../../../../../assets/font/font.css";
import location from "../../../../../assets/images/location.png";
import EmptyFeature from "../../../../../core/EmptyFeature";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedLocationAsync } from "../state/getSavedLocationAsync";
import GradiantCirculeLoading from "../../../../../core/GradiantCirculeLoading";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
function Adresses() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const dispatch = useDispatch();
  const [circule, setCircule] = useState(localStorage.getItem("location"));
  useEffect(() => {
    dispatch(getSavedLocationAsync());
  }, []);
  const locations = useSelector(
    (state) => state.getSavedLocationReducer.locations
  );
  const loading = useSelector((state) => state.getSavedLocationReducer.loading);
  const handleClickLocation = (id) => {
    if (localStorage.getItem("location") === id) return;
    setCircule(id);
    localStorage.setItem("location", id);
  };
  return (
    <>
      {
        <Box>
          <Navbar />
          <Typography
            sx={{
              fontFamily: "Lucida Bright !important",
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              p: 4,
            }}
          >
            {t("generall.address")}
          </Typography>
          {loading ? (
            <GradiantCirculeLoading />
          ) : locations && locations.length !== 0 ? (
            <Grid container sx={{ px: 4 }}>
              {locations.map((item) => (
                <Grid
                  item
                  lg={3.8}
                  md={5.8}
                  xs={11.8}
                  key={item._id}
                  onClick={() => handleClickLocation(item._id)}
                  sx={{
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    border: "1px solid #B5B5B5",
                    borderRadius: "10px",
                    p: 3,
                    cursor: "pointer",
                    ml: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 3 }}>
                    <Box>
                      <span
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                          backgroundImage:
                            circule === item._id
                              ? "linear-gradient(to right,#DC136E,#601823)"
                              : "#fff",
                          display: "block",
                          border: "3px solid white",
                          outline: "2px solid rgb(220, 19, 110)",
                        }}
                      ></span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          position: "relative",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "18px" }}>
                          {language === "ar"
                            ? item.country.name.ar
                            : item.country.name.en}
                        </Typography>{" "}
                        -{" "}
                        <Typography
                          sx={{
                            fontSize: "18px",
                            width: "120px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "pre",
                          }}
                        >
                          {language === "ar"
                            ? item.city.name.ar
                            : item.city.name.en}
                        </Typography>
                        <CloseIcon
                          sx={{ position: "absolute", right: "0px" }}
                        />
                      </Box>
                      <Typography>
                        {language === "ar"
                          ? item.address.name.ar
                          : item.address.name.en}
                      </Typography>
                      <Typography>{item.phone}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
              <Grid
                item
                lg={3.8}
                md={5.8}
                xs={11.8}
                sx={{
                  width: "100%",
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #B5B5B5",
                  borderRadius: "10px",
                  cursor: "pointer",
                  ml: 2,
                }}
              >
                <Link
                  to="/add-adresses"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "45px",
                    textDecoration: "none",
                  }}
                >
                  +
                </Link>
              </Grid>
            </Grid>
          ) : (
            <EmptyFeature
              img={location}
              problem={t("address.empty.label")}
              explain={t("address.empty.explain")}
              to="/add-adresses"
              linkName={t("address.empty.button")}
            />
          )}
        </Box>
      }
    </>
  );
}

export default Adresses;
