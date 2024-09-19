import { colors } from "@/constant/Colors";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function GetAppFooter() {
  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Grid container columnSpacing={4}>
            <Grid item md={6} xs={12}>
              <Box sx={style.getApp}>
                <Image
                  alt="oopx"
                  src={"/mobile.png"}
                  width={86}
                  height={166}
                  style={{ position: "absolute", left: 0 }}
                />
                <Typography sx={style.head} className={poppins.className}>
                  Get the App!
                </Typography>
                <Typography sx={style.para} className={poppins.className}>
                  App is where the fun is! It’s Easy, Fast and Convenient.
                </Typography>
                <Box sx={style.downloadLinkBox}>
                  <Link
                    href={
                      "https://play.google.com/store/apps/details?id=com.broadwaypizza.app&hl=en&gl=US"
                    }
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      color: "inherit",
                    }}
                  >
                    <Image
                      alt="oopx"
                      src={"/google-play.png"}
                      width={126}
                      height={38}
                    />
                  </Link>
                  <Link
                    href={
                      "https://apps.apple.com/tt/app/broadway-pizza-official/id1559366003"
                    }
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      color: "inherit",
                    }}
                  >
                    <Image
                      alt="oopx"
                      src={"/apple.png"}
                      width={126}
                      height={38}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} sx={style.grid}>
              <Box sx={style.contactApp}>
                <Box
                  sx={{
                    display: {
                      md: "block",
                      xs: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <Typography sx={style.head} className={poppins.className}>
                    Connect with us
                  </Typography>
                  <Box sx={style.socials}>
                    <Link
                      href={"https://www.facebook.com/Broadwaypizzaa"}
                      target="_blank"
                    >
                      <Image
                        src={"/facebook.png"}
                        width={27}
                        height={26}
                        alt="oopx"
                      />
                    </Link>
                    <Link
                      href={
                        "https://www.instagram.com/broadwaypizzaa/?theme=dark"
                      }
                      target="_blank"
                    >
                      <Image
                        src={"/instagram.png"}
                        width={27}
                        height={26}
                        alt="oopx"
                      />
                    </Link>
                    <Link href={"https://wa.me/+9221111339339"} target="_blank">
                      <Image
                        src={"/whatsapp.png"}
                        width={27}
                        height={26}
                        alt="oopx"
                      />
                    </Link>
                  </Box>
                </Box>
                <Typography sx={style.para1} className={poppins.className}>
                  Copyright © Broadway Pizza Pakistan. All rights reserved.J & S
                  CORPORATION
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
const style = {
  main: {
    width: "100%",
    height: "100%",
    paddingY: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    maxWidth: { xl: "1240px", lg: "1100px" },
  },
  grid: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "start",
  },
  getApp: {
    width: "100%",
    position: "relative",
    paddingLeft: "105px",
    boxSizing: "border-box",
  },
  head: {
    fontSize: "24px",
    margin: "5px 0 0 0",
    color: colors.broadwayAboutHeadingColor,
    fontWeight: 600,
  },
  para: {
    margin: "5px 0 10px 0",
    opacity: 0.7,
    maxWidth: "260px",
    display: "block",
  },
  para1: {
    margin: "1rm 0",
    opacity: 0.9,
    maxWidth: { md: "400px" },
    display: "block",
    fontSize: "17px",
    width: "100%",
    textAlign: { md: "left", xs: "center" },
  },
  downloadLinkBox: {
    display: { sm: "flex", xs: "block" },
    flexDirection: "row",
    gap: "10px",
    justifyContent: "start",
    alignItems: "center",
    margin: "10px 0px",
  },
  contactApp: {
    width: "100%",
    height: "100%",
    marginBottom: { md: "0px", xs: "5rem" },
    marginTop: { md: "0px", xs: "1rem" },
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: "start",
    alignItems: "center",
    margin: "10px 0px 36px",
  },
};
