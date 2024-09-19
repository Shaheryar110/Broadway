import React, { useEffect } from "react";
import { colors } from "../../../constant/Colors";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Global } from "@emotion/react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WestIcon from "@mui/icons-material/West";
import { Poppins } from "next/font/google";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import dile from "../../../../public/Assets/dile.png";
import Ta from "../../../../public/Assets/ta.png";
const Root = styled("div")(({ theme }) => ({}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const drawerBleeding = 56;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});
type Iprops = {
  openModel: boolean;
};

const SelectLocation: React.FC<Iprops> = ({ openModel }) => {
  const [open, setOpen] = React.useState(false);
  const [showOption, setShowOption] = React.useState("");
  const [showModelCity, setShowModelCity] = React.useState<Boolean>(false);
  const [showModelOut, setShowModelOut] = React.useState<Boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [value, setValue] = React.useState("Select");
  const [outlet, setOutlet] = React.useState(false);
  const [outValue, setOutVal] = React.useState("");

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Sialkot",
    "Multan",
    "Hyderabad",
    "Faislabad",
  ];
  const outlets = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Sialkot",
    "Multan",
    "Hyderabad",
    "Faislabad",
  ];
  const showModelCityFun = (val: boolean) => {
    setShowModelCity(val);
  };
  const showModelCityFun1 = (val: boolean) => {
    setShowModelCity(val);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const showModelOutletFun = (val: boolean) => {
    setOutlet(val);
  };
  const handleChangeOut = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOutVal((event.target as HTMLInputElement).value);
  };
  useEffect(() => {
    setShowModelCity(false);
    setShowModelOut(true);
  }, [value]);
  useEffect(() => {
    if (openModel === true) {
      setOpen(true);
    }
    console.log(openModel, "hi");
  }, [openModel]);

  return (
    <>
      <Root>
        <CssBaseline />
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: "100%",
              overflow: "visible",
            },
          }}
        />

        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              pb: 2,
              position: "relative",
            }}
          >
            <Box sx={style.backButton}>
              <Button sx={style.btn} onClick={toggleDrawer(false)}>
                <WestIcon sx={{ color: colors.primary }} />
              </Button>
            </Box>
            <Box sx={style.headingBox}>
              <Typography sx={style.head}>Selects Address</Typography>
            </Box>
            <Box sx={style.lowerPart}>
              <Box
                sx={[
                  style.takeAway,
                  {
                    backgroundColor:
                      showOption === "takeaway" ? "#FFF4D7" : "white",
                  },
                ]}
                onClick={() => setShowOption("takeaway")}
              >
                <img
                  src={Ta.src}
                  alt="oops"
                  style={{ width: "35px", height: "35px" }}
                />
                <Typography
                  className={poppins.className}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    fontWeight: 400,
                  }}
                >
                  TAKEAWAY
                </Typography>
              </Box>
              <Box
                sx={[
                  style.takeAway,
                  {
                    backgroundColor:
                      showOption === "dilevery" ? "#FFF4D7" : "white",
                  },
                ]}
                onClick={() => setShowOption("dilevery")}
              >
                <img
                  src={dile.src}
                  alt="oops"
                  style={{ width: "35px", height: "35px" }}
                />
                <Typography
                  className={poppins.className}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    fontWeight: 400,
                  }}
                >
                  Delivery
                </Typography>
              </Box>
            </Box>
            <hr style={{ color: "#e2e2e2" }} />
            {(showOption === "takeaway" || showOption === "dilevery") && (
              <Box sx={style.selectCityBox}>
                <Typography
                  className={poppins.className}
                  sx={{ fontWeight: 600, fontSize: "1.3rem" }}
                >
                  Select City
                </Typography>
                <Typography
                  sx={style.boldTex}
                  className={poppins.className}
                  onClick={() => showModelCityFun(true)}
                >
                  {value} <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            )}
            {showModelCity && (
              <>
                <Root>
                  <CssBaseline />
                  <Global
                    styles={{
                      ".MuiDrawer-root > .MuiPaper-root": {
                        height: "100%",
                        overflow: "visible",
                      },
                    }}
                  />

                  <SwipeableDrawer
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                      keepMounted: true,
                    }}
                  >
                    <StyledBox
                      sx={{
                        pb: 2,

                        position: "relative",
                      }}
                    >
                      <Box sx={style.backButton}>
                        <Button
                          sx={style.btn}
                          onClick={() => showModelCityFun1(false)}
                        >
                          <WestIcon sx={{ color: colors.primary }} />
                        </Button>
                      </Box>
                      <Box sx={style.headingBox}>
                        <Typography sx={style.head}>Select City</Typography>
                      </Box>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        sx={{ padding: "2rem" }}
                      >
                        {cities.map((data, index) => {
                          return (
                            <Box key={index}>
                              <FormControlLabel
                                className={poppins.className}
                                sx={{ fontSize: "4rem" }}
                                value={data}
                                control={<Radio />}
                                label={data}
                              />
                            </Box>
                          );
                        })}
                      </RadioGroup>
                    </StyledBox>
                  </SwipeableDrawer>
                </Root>
              </>
            )}
            {(showOption === "takeaway" ||
              (showOption === "dilevery" && value !== "Select")) && (
              <Box sx={style.selectCityBox}>
                <Typography
                  className={poppins.className}
                  sx={{ fontWeight: 600, fontSize: "1.3rem" }}
                >
                  Select City
                </Typography>
                <Typography
                  sx={style.boldTex}
                  className={poppins.className}
                  onClick={() => showModelOutletFun(true)}
                >
                  {outValue} <KeyboardArrowRightIcon />
                </Typography>
              </Box>
            )}
            {outlet && (
              <>
                <Root>
                  <CssBaseline />
                  <Global
                    styles={{
                      ".MuiDrawer-root > .MuiPaper-root": {
                        height: "100%",
                        overflow: "visible",
                      },
                    }}
                  />

                  <SwipeableDrawer
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                      keepMounted: true,
                    }}
                  >
                    <StyledBox
                      sx={{
                        pb: 2,

                        position: "relative",
                      }}
                    >
                      <Box sx={style.backButton}>
                        <Button
                          sx={style.btn}
                          onClick={() => showModelOutletFun(false)}
                        >
                          <WestIcon sx={{ color: colors.primary }} />
                        </Button>
                      </Box>
                      <Box sx={style.headingBox}>
                        <Typography sx={style.head}>Select Outlet</Typography>
                      </Box>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={outValue}
                        onChange={handleChangeOut}
                        sx={{ padding: "2rem" }}
                      >
                        {outlets.map((data, index) => {
                          return (
                            <Box key={index}>
                              <FormControlLabel
                                className={poppins.className}
                                sx={{ fontSize: "4rem" }}
                                value={data}
                                control={<Radio />}
                                label={data}
                              />
                            </Box>
                          );
                        })}
                      </RadioGroup>
                    </StyledBox>
                  </SwipeableDrawer>
                </Root>
              </>
            )}
            {outValue && (
              <Box sx={style.out}>
                <Typography
                  className={poppins.className}
                  sx={style.showMenu}
                  onClick={toggleDrawer(false)}
                >
                  SHOW MENU
                </Typography>
              </Box>
            )}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </>
  );
};

export default SelectLocation;
const style = {
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.background,
  },
  mainMob: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  leftMenuLargeOnly: {
    position: "fixed",
    height: "100vh",
    left: 0,
    top: 0,
    display: { lg: "flex", xs: "none" },
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    background: colors.primary,
    zIndex: 99,
  },
  iconBoxLarge: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  container: {
    maxWidth: { lg: "1400px", md: "950px" },
  },
  header: {
    width: "100%",
    padding: { md: "1rem", xs: "0px" },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBoxMob: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  headerLocationBox: {
    display: "flex",
    flexDirection: "row",
    gap: { md: "1rem", sm: "0.5rem" },
    alignItems: "center",
  },
  locationText: {},
  dilveryTo: {
    color: colors.grey,
    fontSize: "0.7rem",
  },
  iconColor: {
    color: colors.primary,
    width: "2em",
    height: "2em",
  },
  location: {
    fontWeight: 600,
  },
  inputStyle: {
    "::before": { borderBottom: "0px !important" },
    border: "0px solid rgba(0,0,0,0.42)",
    borderRadius: "10px",
    width: "100%",
    paddingY: "0.5rem",
    fontSize: "12px",
    paddingX: "16px",
    "::after": { borderBottom: "0px !important" },
    backgroundColor: colors.white,
  },
  mobNavBar: {
    position: "fixed",
    bottom: 10,
    zIndex: 999,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    transition: "bottom 0.3s ease",
    height: "62px",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginX: "0.5rem",
    backgroundColor: "#252E1C",
    borderRadius: "20rem",
    padding: "0.5rem",
    filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))",
  },
  fixed: {
    bottom: 30,
  },
  iconStyle: {
    height: "35px",
    width: "35px",
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#252E1C",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  btn: {
    fontWeight: 700,
    color: colors.primary,
  },
  headingBox: {
    width: "100%",
    textAlign: "center",
  },
  head: {
    paddingY: "1rem",
    fontSize: "25px",
    fontWeight: 600,
    textAlign: "center",
  },
  lowerPart: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  takeAway: {
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #e2e2e2",
    borderRadius: "10px",
    paddingY: "0.5rem",
    marginX: "1rem",
  },
  boldTex: {
    color: colors.primary,
    fontWeight: 600,
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  selectCityBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
  outvals: {
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 400,
  },
  iconStyles: {
    color: colors.white,
    fontSize: "2rem",
  },
  out: {
    background: colors.primary,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingY: "1rem",
  },
  showMenu: {
    fontSize: "2rem",
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  },
};
