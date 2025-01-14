import { Box, Button, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../constant/Colors";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { HashNavigation } from "swiper/modules";

import { Poppins } from "next/font/google";

type Iprops = {
  tabs: string[];
  isLoading: boolean;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Tabs: React.FunctionComponent<Iprops> = ({ tabs = [], isLoading }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  const swiperRef = useRef<SwiperRef>(null);
  const handleTabClick = (item: string, index: number) => {
    const headingElement = document.getElementById(item);
    if (headingElement) {
      window.scrollTo({
        top: headingElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setActiveTab(item);

    // swiperRef.current?.swiper.translateTo(index * 330, 1000, false, false);
  };

  const handleScroll = () => {
    // Adjust this value as needed
    const sectionTops = tabs.map((item) => {
      const headingElement = document.getElementById(item);
      return headingElement ? headingElement.offsetTop - 100 : 0;
    });
    const scrollPosition = window.scrollY + window.innerHeight / 4;
    for (let i = sectionTops.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionTops[i]) {
        setActiveTab(tabs[i]);
        if (window.innerWidth < 576)
          swiperRef.current?.swiper.translateTo(-i * 180, 1000, false, false);
        else if (window.innerWidth >= 577 && window.innerWidth <= 768)
          swiperRef.current?.swiper.translateTo(-i * 165, 1000, false, false);
        else if (window.innerWidth >= 769 && window.innerWidth <= 992)
          swiperRef.current?.swiper.translateTo(-i * 140, 1000, false, false);
        else if (window.innerWidth >= 993 && window.innerWidth <= 1200)
          swiperRef.current?.swiper.translateTo(-i * 140, 1000, false, false);
        else if (window.innerWidth > 1200)
          swiperRef.current?.swiper.translateTo(-i * 110, 1000, false, false);

        return;
      }
    }

    setActiveTab(tabs[0]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box sx={style.main}>
        <Container sx={style.container}>
          <Swiper
            ref={swiperRef}
            hashNavigation={{
              watchState: true,
            }}
            style={style.swiper}
            modules={[HashNavigation]}
            slidesPerView={5}
          >
            {!isLoading && tabs ? (
              tabs?.map((item, index) => {
                const buttonBackgroundColor =
                  index === 0
                    ? colors.tab1
                    : index % 2 === 0
                    ? colors.tab2
                    : colors.tab3;
                return (
                  <SwiperSlide
                    data-hash={item}
                    key={index}
                    className="swiperSlide"
                  >
                    <Button
                      onClick={() => handleTabClick(item, index)}
                      sx={{
                        ...style.tabItem,
                        // Set the active class based on the state
                        ...(activeTab === item
                          ? {
                              // boxShadow:
                              //   "1px 7px 19px 0px rgba(255, 197, 0, 1)",

                              background: colors.primary,
                            }
                          : {
                              backgroundColor: buttonBackgroundColor,
                            }),
                      }}
                      key={index}
                      className={poppins.className}
                    >
                      {item}
                    </Button>
                  </SwiperSlide>
                );
              })
            ) : (
              <>
                <Skeleton variant="rectangular" sx={style.tabItem} />
              </>
            )}
          </Swiper>
        </Container>
      </Box>
    </>
  );
};

export default Tabs;
const style = {
  main: {
    width: "100%",
    position: "sticky",
    top: "0px",
    zIndex: 2,
    backgroundColor: colors.background,
    paddingTop: "4px",
    paddingLeft: { sx: 0, sm: 0, md: 0, lg: 10, xl: 10 },
  },
  container: {
    maxWidth: { lg: "1700px", md: "1300px" },
    marginTop: "4px",
  },
  tabsBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabItem: {
    width: "auto",
    borderRadius: "30px",
    paddingY: "12px",
    paddingX: "20px",
    color: colors.dark,
    fontSize: { xl: "0.8rem", lg: "0.7rem", xs: "14px" },
    fontWeight: 500,
    marginLeft: "6px",

    ":hover": {
      boxShadow: "1px 7px 19px 0px rgba(255, 197, 0, 1)",
      background: colors.primary,
    },
    fontFamily: "__Poppins_1562c7,__Poppins_Fallback_1562c7",
  },
  swiper: { paddingBottom: "16px" },
  link: { textDecoration: "none", color: "inherit" },
};
