import {
  Typography,
  styled,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Title from "@/components/genericComponents/Title";
import Description from "@/components/genericComponents/Description";
import TitleBlue from "@/components/genericComponents/TitleBlue";
import DescriptionBlue from "@/components/genericComponents/DescriptionBlue";
import PexelsPhoto from "../../public/images/pexels-photo-by-sora-shimazaki.png";
import { VALUES } from "@/utils";
import GenericCard from "@/components/genericComponents/GenericCard";
import MilestonesList from "@/components/lists/MilestonesList";
import { theme } from "@/muiConfig/theme";
import { useRouter } from "next/router";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "75px 20px 100px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.46) 52.66%, #FFFFFF 100%), url(${PexelsPhoto.src})`,
  [theme.breakpoints.down("md")]: {
    padding: "30px 15px",
  },
}));

const OurVisionButton = styled(Button)(({ theme }) => ({
  width: "268px",
  height: "58px",
  textTransform: "uppercase",
  fontSize: "16px",
  background: `linear-gradient(to right, #03432E, #238464, #03432E)`,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const WhoWeAreContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  flex: 1,
  justifyContent: "flex-end",
  padding: "40px 50px 100px",

  [theme.breakpoints.down("lg")]: {
    padding: "40px 50px 80px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "40px 15px",
  },
}));

const QualitiesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "40px",
  gap: "80px",

  [theme.breakpoints.down("sm")]: {
    padding: "50px 15px",
  },
}));

const AboutPage = () => {
  const router = useRouter()
  return (
    <>
      <Container>
        <Title title="About Us" />
        <Description desc="At Arcompsol, we believe in a flat hierarchy that is conducive for maximum growth for everyone working for us. If you are motivated by challenges and enjoy an environment that is dynamic, challenging and rewarding, we will always have a place for you." />
        <OurVisionButton variant="primary"
        onClick={()=> {
          router.push(
          {
            pathname: '/careers', 
            query: { vision: true},
          })

        }}
        >Our Vision</OurVisionButton>
      </Container>
      <WhoWeAreContainer>
        <TitleBlue title="Who we are?" />
        <DescriptionBlue desc="Who we are is best described by what we value in our coworkers, and who we as individuals continually aspire to be. These personal attributes codify the most important traits we look for in future coworkers." />

        <QualitiesContainer>
          {VALUES.map((value, index) => (
            <GenericCard key={index} title={value.heading} content={value.description} />
          ))}
        </QualitiesContainer>
      </WhoWeAreContainer>
      <MilestonesList
        titleColor={theme.palette.common.white}
        descColor={theme.palette.common.dimWhite}
        backgroundcolor={theme.palette.common.prussianBlue}
        circleColor={theme.palette.common.white}
      />
    </>
  );
};

export default AboutPage;
