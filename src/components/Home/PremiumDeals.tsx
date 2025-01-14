import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Heading from "../Common/Heading";
import { colors } from "../../constant/Colors";
import PremiumDealsCard from "../Common/PremiumDealsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { MenuItem } from "@/services/Home/types";
type Iprops = {
  data: MenuItem[];
  heading: string;
  isLoading: boolean;
};
const PremiumDeals: React.FC<Iprops> = ({ data = [], heading, isLoading }) => {
  return (
    <Box sx={style.main}>
      <Box sx={style.subBox}>
        <Heading heading={heading} isLoading={isLoading} />

        <Box
          sx={{
            marginLeft: { lg: "1rem", xs: "0px" },
            marginTop: "12px",
            maxWidth: {
              xl: "1400px",
              lg: "1000px",
              md: "900px",
              sm: "600px",
              xs: "400px",
            },
          }}
        >
          <Grid container rowSpacing={0} columnSpacing={0}>
            {data &&
              data.length > 0 &&
              data?.map((item, index) => {
                const background =
                  index % 3 === 0
                    ? colors.tab1
                    : index % 3 === 1
                    ? colors.tab2
                    : colors.tab3;
                return (
                  <Grid item xs={6} sm={4} md={3} lg={3} xl={2} key={index}>
                    <PremiumDealsCard
                      isLoading={isLoading}
                      key={index}
                      text={item.Name}
                      price={item.MinDeliveryPrice?.toString()}
                      src={item.ImageBase64}
                      background={background}
                      description={item?.Description}
                      discount={item?.DiscountPercentage}
                      serving={item?.Serving}
                      discountedPrice={item.DiscountedPrice?.toString()}
                      id={item.ID}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumDeals;
const style = {
  main: {
    width: "100%",
    paddingBottom: { md: "10px", xs: "8px" },
    backgroundColor: colors.background,
  },
  subBox: {
    paddingLeft: { lg: "5rem", xs: "5px" },
    paddingBottom: "10px",
    paddingRight: { lg: "0px", xs: "5px" },
  },
  mainCardBox: {
    width: "100%",
  },

  card: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: 4,
    margin: "1rem",
  },
  media: {
    width: "180px",
    height: "180px",
    borderRadius: "1rem",
  },
  price: {
    fontWeight: 600,
  },
  text: {
    paddingY: "1rem",
    color: colors.grey,
    width: "230px",
  },
  content: {
    marginLeft: "0.8rem",
    marginTop: "0.5rem",
  },
  title: {
    paddingY: "0.5rem",
    width: "100%",
    textAlign: "center",
  },
  titleBox: {
    backgroundColor: "grey",
    borderRadius: "1rem",
    width: "100%",
  },
};
