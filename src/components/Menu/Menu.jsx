import { Typography, Box, Container } from "@mui/material";
import { Poppins } from "next/font/google";
import { colors } from "../../constant/Colors";
import Image from "next/image";
import { getMenuImage } from "@/services/Home/services";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default async function Menu() {
  const data = await getMenuImage({});
  return (
    <Box sx={style.main}>
      <Typography className={poppins.className} sx={style.heading}>
        MENU
      </Typography>
      <Container sx={style.container}>
        <Image
          className="menu-image"
          width={1000}
          height={2000}
          src={data && data.Data[0].value}
          alt="oopx"
          fill={false}
        />
      </Container>
    </Box>
  );
}
const style = {
  main: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    fontWeight: 700,
    marginY: "1rem",
    fontSize: "30px",
    color: colors.black,
  },
  container: {
    maxWidth: { lg: "1000px", md: "700px", sm: "500px", xs: "400px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
