import GenericWrapper from "@/components/genericComponents/GenericWrapper";
import HomeHero from "@/components/heroComponents/HomeHero";
import MilestonesList from "@/components/lists/MilestonesList";
import { Typography, styled, Box } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import {
  AiAndMlImage,
  BigDataImage,
  DevOpsImage,
  MobileDevelopmentImage,
  UiUxDesignImage,
  WebDevelopmentImage,
} from "../../public/images";
import { theme } from "@/muiConfig/theme";
import BlogsCarousel from "@/components/genericComponents/GenericCarousel";
import { BLOGSLIST } from "@/components/lists/BlogsList";
import FeedbackCarousel from "@/components/genericComponents/FeedbackCarousel";
import { FEEDBACK_LIST } from "@/components/lists/FeedbacksList";

const ServicesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "120px 170px",
  background:
    "radial-gradient(100% 100% at 49.59% 49.6%, #0FE9A2 0%, #000000 76.56%)",

  [theme.breakpoints.down("lg")]: {
    padding: "120px 30px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "80px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 15px",
  },
}));

const ServicesTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "40px",
  marginBottom: "15px",
  color: theme.palette.background.paper,
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const ServicesDescription = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "24px",
  marginBottom: "30px",
  maxWidth: "674px",
  textAlign: "center",
  color: theme.palette.background.paper,

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

const ServicesList = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    gap: "30px",
  },
}));

const ServiceContainer = styled(Box)(({ theme }) => ({
  minWidth: "calc(33.33% - 14px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  justifyContent: "flex-end",

  [theme.breakpoints.down("lg")]: {
    minWidth: "calc(50% - 10px)",
  },

  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
  },
}));

const ServiceImage = styled(Box)<{ width: string; height: string }>(
  ({ theme, width, height }) => ({
    width: width,
    height: height,
    position: "relative",
  })
);

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "24px",
  textAlign: "center",
  color: theme.palette.background.paper,
}));

const BlogsCarousalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  background:
    "radial-gradient(100% 100% at 49.59% 49.6%, #2C9F8B 100%, #00000A 100%)",

  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    gap: "20px",
  },
}));

const FeedbackCarousalWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
    gap: "20px",
  },
}));

const BlogsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "40px",
  textAlign: "center",
  letterSpacing: "0.05em",
  lineHeight: "60px",
  color: theme.palette.common.white,
}));

const FeedbackTitle = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "0.015em",
  textTransform: "capitalize",
  color: "#011736",
}));

const HomePage = () => {
  const SERVICES = [
    {
      image: WebDevelopmentImage,
      title: "Web Development",
      imageHeight: "163px",
      imageWidth: "162px",
    },
    {
      image: MobileDevelopmentImage,
      title: "Mobile Development",
      imageHeight: "162px",
      imageWidth: "303px",
    },
    {
      image: UiUxDesignImage,
      title: "UI/UX Design",
      imageHeight: "161px",
      imageWidth: "242.81px",
    },
    {
      image: AiAndMlImage,
      title: "AI and ML",
      imageHeight: "123px",
      imageWidth: "133px",
    },
    {
      image: BigDataImage,
      title: "Big Data",
      imageHeight: "188px",
      imageWidth: "169px",
    },
    {
      image: DevOpsImage,
      title: "DevOps",
      imageHeight: "190px",
      imageWidth: "246px",
    },
  ];

  return (
    <Fragment>
      <HomeHero />
      <GenericWrapper backgroundcolor={theme.palette.common.white}>
        <ServicesContainer id='services'>
          <ServicesTitle>Services we provide</ServicesTitle>
          <ServicesDescription>
            When it comes to design, our approach is simple: Everything is
            Human-centric, be it UI or UX
          </ServicesDescription>
          <ServicesList>
            {SERVICES.map((service, index) => (
              <ServiceContainer key={`service ${index}`}>
                <ServiceImage
                  width={service.imageWidth}
                  height={service.imageHeight}
                >
                  <Image alt={service.title} fill src={service.image} />
                </ServiceImage>
                <ServiceTitle>{service.title}</ServiceTitle>
              </ServiceContainer>
            ))}
          </ServicesList>
        </ServicesContainer>
      </GenericWrapper>
      <MilestonesList
        titleColor={theme.palette.common.black}
        descColor={theme.palette.common.mortar}
        backgroundcolor={theme.palette.common.white}
        circleColor={theme.palette.common.black}
      />
      {/* <BlogsCarousalWrapper>
        <BlogsTitle>Latest Blogs</BlogsTitle>
        <BlogsCarousel carouselList={BLOGSLIST} />
      </BlogsCarousalWrapper> */}

      <FeedbackCarousalWrapper>
        <FeedbackTitle>Client Testimonials</FeedbackTitle>
        <FeedbackCarousel carouselList={FEEDBACK_LIST} />
      </FeedbackCarousalWrapper>
    </Fragment>
  );
};

export default HomePage;
