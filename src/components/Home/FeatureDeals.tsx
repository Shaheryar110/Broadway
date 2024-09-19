import { Box, Typography } from "@mui/material";
import React from "react";
import Heading from "../Common/Heading";
import { colors } from "../../constant/Colors";
import FeatureDealsCard from "../Common/FeatureDealsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MenuItem } from "@/services/Home/types";

type Iprops = {
  data: MenuItem[];
  heading: string;
  isLoading: boolean;
};

const FeatureDeals: React.FC<Iprops> = ({ data = [], heading, isLoading }) => {
  return (
    <>
      <Box sx={style.main}>
        <Box sx={style.subBox}>
          <Heading heading={heading} isLoading={isLoading} />
          <Box
            sx={{ width: "100%", paddingRight: "7px", paddingBottom: "13px" }}
          >
            {/* <Swiper
              navigation={{
                prevEl: ".custom-arrow-prev",
                nextEl: ".custom-arrow-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                755: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },

                1400: {
                  slidesPerView: 3,
                },
                1800: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
            > */}
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
                  // <SwiperSlide
                  //   style={{
                  //     paddingBottom: "30px",
                  //     width: "auto !important",
                  //   }}
                  //   className="swiperSlide"
                  //   key={index}
                  // >
                  <Box sx={{ paddingBottom: "10px" }}>
                    <FeatureDealsCard
                      isLoading={isLoading}
                      text={item.Name}
                      price={item.MinDeliveryPrice?.toString()}
                      src={item.ImageBase64}
                      background={background}
                      discountedPrice={item.DiscountedPrice?.toString()}
                      id={item.ID}
                      discount={item?.DiscountPercentage}
                      serving={Number(item?.Serving)}
                    />
                  </Box>
                  // </SwiperSlide>
                );
              })}
            {/* </Swiper> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeatureDeals;
const style = {
  main: {
    width: "100%",
    paddingLeft: { lg: "5rem", xs: "12px" },
    backgroundColor: colors.background,
    marginTop: "10.6px",
  },
  subBox: {},
  mainCardBox: {
    width: "100%",
  },
};
