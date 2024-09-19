import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  duration,
} from "@mui/material";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import SearchB from "../../../../public/Assets/searchB.svg";
import React, { useEffect } from "react";
import Sort from "../../../../public/Assets/sort.svg";
import { Poppins } from "next/font/google";
import { colors } from "../../../constant/Colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StoreState } from "@/redux/reduxStore";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type IProps = {
  openFeedbackDialog: (value: boolean) => void;
};

const ModbileScreenInput: React.FC<IProps> = ({ openFeedbackDialog }) => {
  const [isFixed, setIsFixed] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState("cart");
  const cartData = useSelector((state: StoreState) => state.cart);

  const handleNavbar = (val: boolean) => () => {
    setIsOpen(val);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const exitAnimation = {
    opacity: 0,
    x: -100, // Example: Move the component to the left while hiding
    transition: { duration: 0.5 }, // Animation duration
  };
  return (
    <>
      <Box sx={style.mainMob} className="mobSearch">
        <Container sx={style.container}>
          <Box sx={style.searchBoxMob}>
            <Sort onClick={handleNavbar(true)} sx={{ cursor: "pointer" }} />
            <Input
              placeholder="Type Your Search Here"
              sx={style.inputStyle}
              className={poppins.className}
              startAdornment={
                <InputAdornment position="start">
                  <SearchB />
                </InputAdornment>
              }
            />
          </Box>
          <Box
            sx={{
              ...style.mobNavBar,
              ...(isFixed ? style.fixed : {}),
            }}
          >
            <Box sx={style.subContainer}>
              <Box
                sx={{
                  ...style.iconStyle,
                  backgroundColor:
                    active === "home" ? "#FFC700 !important" : "#252E1C",
                  width: active === "home" ? "50px" : "40px",
                  height: active === "home" ? "50px" : "40px",
                }}
              >
                <Link href={"/"} style={{ textDecoration: "none" }}>
                  <Image
                    onClick={() => setActive("home")}
                    src="/home.svg"
                    width={26}
                    height={26}
                    alt="oops home"
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  ...style.iconStyle,
                  backgroundColor:
                    active === "search" ? "#FFC700 !important" : "#252E1C",
                  width: active === "search" ? "50px" : "40px",
                  height: active === "search" ? "50px" : "40px",
                }}
              >
                <Image
                  onClick={() => setActive("search")}
                  src="/icons/shopWhite.png"
                  width={26}
                  height={26}
                  alt="oops home"
                />
              </Box>
              <Box
                sx={{
                  ...style.iconStyle,
                  backgroundColor:
                    active === "cart" ? "#FFC700 !important" : "#252E1C",
                  width: active === "cart" ? "50px" : "40px",
                  height: active === "cart" ? "50px" : "40px",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Link href={"/cart"} style={{ textDecoration: "none" }}>
                    <Image
                      onClick={() => setActive("cart")}
                      src="/Vector.svg"
                      width={24}
                      height={24}
                      alt="oops home"
                    />
                    {cartData.cartProducts.length > 0 && (
                      <Box sx={style.badge}>
                        <Typography className={poppins.className}>
                          {cartData.cartProducts.length}
                        </Typography>
                      </Box>
                    )}
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  ...style.iconStyle,
                  backgroundColor:
                    active === "fvrt" ? "#FFC700 !important" : "#252E1C",
                  width: active === "fvrt" ? "50px" : "40px",
                  height: active === "fvrt" ? "50px" : "40px",
                }}
              >
                <Image
                  src="/icons/add.png"
                  width={26}
                  height={26}
                  alt="oops home"
                  onClick={() => setActive("fvrt")}
                />
              </Box>
              <Box
                sx={{
                  ...style.iconStyle,
                  backgroundColor:
                    active === "heart" ? "#FFC700 !important" : "#252E1C",
                  width: active === "heart" ? "50px" : "40px",
                  height: active === "heart" ? "50px" : "40px",
                }}
              >
                <Image
                  onClick={() => setActive("heart")}
                  src="/icons/pin.png"
                  width={26}
                  height={26}
                  alt="oops home"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {isOpen && (
        <motion.div
          initial={{ x: -199, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -199, opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            width: 250,
            height: "100vh",
            position: "fixed",
            top: 0,
            zIndex: 999,
            background: "white",
          }}
        >
          <Box
            sx={{
              width: 250,
              height: "100vh",
              boxShadow: 3,
              position: "fixed",
              top: 0,
              zIndex: 999,
              background: "white",
            }}
            role="presentation"
          >
            <Box
              sx={{
                paddingY: "20px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingX: "12px",
              }}
            >
              <KeyboardArrowLeftIcon
                sx={{
                  position: "absolute",
                  zIndex: 9999,
                  fontSize: "2rem",
                  top: 15,
                  left: 15,
                  cursor: "pointer",
                }}
                onClick={handleNavbar(false)}
              />
              <Typography
                sx={{
                  fontSize: { md: "18px", sm: "17px", xs: "14px" },
                  fontWeight: 700,
                }}
              >
                MENU
              </Typography>
            </Box>
            <List>
              {[
                { name: "Home", link: "/home", icon: "/icons/one.png" },
                {
                  name: "Cart",
                  link: "/cart",
                  icon: "/icons/take-away.png",
                },
                { name: "Menu", link: "/menu", icon: "/icons/one.png" },
                {
                  name: "Location",
                  link: "/location",
                  icon: "/icons/next.png",
                },
                { name: "Feedback", link: "", icon: "/icons/plus.png" },
                {
                  name: "Frenchise",
                  link: "/frenchise",
                  icon: "/icons/franchise.png",
                },
                { name: "Contact", link: "/contact", icon: "/icons/call.png" },
              ].map((text, index) => (
                <React.Fragment key={index}>
                  <Divider />
                  <ListItem disablePadding sx={{ paddingY: "4px" }}>
                    <ListItemButton
                      onClick={() => {
                        setTimeout(() => {
                          setIsOpen(false);
                        }, 700);
                      }}
                    >
                      <ListItemIcon></ListItemIcon>
                      <Link
                        href={text.link}
                        style={{
                          textDecoration: "none",
                          listStyle: "none",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        {text.name === "Feedback" ? (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <Image
                              src={text.icon}
                              width={30}
                              height={30}
                              alt=";[[]d"
                              style={{ padding: "5px" }}
                            />
                            <ListItemText
                              primary={text.name}
                              onClick={() => openFeedbackDialog(true)}
                            />
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <Image
                              src={text.icon}
                              width={30}
                              height={30}
                              alt=";[[]d"
                              style={{ padding: "5px" }}
                            />
                            <ListItemText primary={text.name} />
                          </Box>
                        )}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Box>
        </motion.div>
      )}
      {/* {isShowFeedBackDialog && <FeedbackDialog /> } */}
    </>
  );
};

export default ModbileScreenInput;
const style = {
  mainMob: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  container: {
    maxWidth: { lg: "1400px", md: "950px" },
  },
  searchBoxMob: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    cursor: "pointer",
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
  fixed: {
    bottom: 30,
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
    alignItems: "center",
  },
  iconStyle: {
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "Center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "#252E1C",
  },
  badge: {
    position: "absolute",
    top: "-15px",
    right: "-15px",
    background: colors.white,
    color: colors.primary,
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
