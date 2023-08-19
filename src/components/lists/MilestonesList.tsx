import { Box, styled, Typography } from "@mui/material";
import GenericWrapper from "../genericComponents/GenericWrapper";
import CirclesSquare from "../icons/CirclesSquare";
import MilestoneFlag from "../icons/MilestoneFlag";

interface MileStoneProps {
  titleColor: String;
  descColor: String;
  backgroundcolor: String;
  circleColor: String;
}

interface ListComponentsProps {
  iseven?: string;
  milestonecolor?: String;
}

interface ColorProps {
  milestonecolor: String;
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "calc(100% - 40px)",
  display: "flex",
  flexDirection: "column",
  padding: "70px 20px",
  position: "relative",
}));

const Title = styled(Typography)<ColorProps>(({ theme, milestonecolor }) => ({
  fontSize: "40px",
  fontWeight: 700,
  color: `${milestonecolor}`,
  margin: "0px auto 20px",
}));

const Description = styled(Typography)<ColorProps>(
  ({ theme, milestonecolor }) => ({
    fontSize: "21px",
    fontWeight: 400,
    color: `${milestonecolor}`,
    margin: "0px auto 76px",
    maxWidth: "1056px",
    textAlign: "center",
  })
);

const ListWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "1170px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
}));

const ListItemWrapper = styled(Box)<ListComponentsProps>(
  ({ theme, iseven }) => ({
    width: "100%",
    maxWidth: "1170px",
    display: "flex",
    gap: "51px",
    height: "250px",
    flexDirection: iseven==="true" ? "row" : "row-reverse",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row-reverse",
      height: "auto",
      gap: "20px",
    },
  })
);

const ListItemIntroContainer = styled(Box)<ListComponentsProps>(
  ({ theme, iseven }) => ({
    width: "calc(50% - 93px)",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: iseven==="true" ? "flex-end" : "flex-start",

    [theme.breakpoints.down("md")]: {
      width: "auto",
      alignItems: "flex-start",
      marginBottom: "50px",
    },
  })
);

const ListItemHeading = styled(Typography)<ListComponentsProps>(
  ({ theme, iseven, milestonecolor }) => ({
    fontSize: "22px",
    fontWeight: 700,
    color: `${milestonecolor}`,
    textAlign: iseven==="true" ? "right" : "left",

    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  })
);

const ListItemDescription = styled(Typography)<ListComponentsProps>(
  ({ theme, iseven, milestonecolor }) => ({
    fontSize: "20px",
    fontWeight: 400,
    color: `${milestonecolor}`,
    textAlign: iseven==="true" ? "right" : "left",

    [theme.breakpoints.down("md")]: {
      textAlign: "left",
    },
  })
);

const FlagAndBorderConatiner = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
}));

const Border = styled(Box)(({ theme, borderColor }) => ({
  height: "calc(100% - 84px)",
  border: `1px dashed ${theme.palette.common.deepSkyBlue}`,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const FlagIconWrapper = styled(Box)(({ theme }) => ({
  width: "84px",
  height: "84px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, rgba(0, 225, 231, 0.5) 0%, rgba(95, 65, 217, 0.5) 100%);",
}));

const RightCircles = styled(CirclesSquare)(({ theme, circleColor }) => ({
  position: "absolute",
  right: 0,
  top: "220px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LeftCircles = styled(CirclesSquare)(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: "150px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MilestonesList = ({
  titleColor,
  descColor,
  backgroundcolor,
  circleColor,
}: MileStoneProps) => {
  const MILESTONS = [
    {
      heading: "Planning and Consulting",
      description:
        "We work with you to understand the scope of your work and find the right solutions to meet your IT challenges with our customized solutions.",
    },
    {
      heading: "Visual and Technical Design",
      description:
        "Our design process starts with understanding your business objectives, goals and priorities so that it helps to find the user needs and align them with real-life user stories.",
    },
    {
      heading: "Development",
      description:
        "We turn your ideas into a reality, while we work on your project it will be placed on the development server where you get to watch the whole process, live.",
    },
    {
      heading: "Testing",
      description:
        "After the development and integration, we go underground for a little while (not literally) to make sure everything is working properly.",
    },
    {
      heading: "Documentation",
      description:
        "The documentation process goes with requirement gathering, authoring, testing, deployment with the documentation part.",
    },
    {
      heading: "Maintenance and Support",
      description:
        "Completing your project is just the beginning - monitoring and ongoing maintenance are parts of the process. We monitor the project performance and perform updates and offer Maintenance and Support at your request.",
    },
  ];

  return (
    <GenericWrapper backgroundcolor={backgroundcolor}>
      <Wrapper>
        <RightCircles circleColor={circleColor} />
        <LeftCircles />
        <Title milestonecolor={titleColor}>How We Work?</Title>
        <Description milestonecolor={descColor}>
          It’s simple: we love seeing your business grow. From planning and
          consulting to documentation and support, Grootan always keeps in close
          touch with our clients and keep them involved in the entire process.
        </Description>
        <ListWrapper>
          {MILESTONS.map((milestone, index) => {
            const iseven = index % 2 === 0;
            const isLast = index === MILESTONS.length - 1;
            return (
              <ListItemWrapper iseven={`${iseven}`} key={index}>
                <ListItemIntroContainer iseven={`${iseven}`}>
                  <ListItemHeading iseven={`${iseven}`} milestonecolor={titleColor}>
                    {milestone.heading}
                  </ListItemHeading>
                  <ListItemDescription
                    iseven={`${iseven}`}
                    milestonecolor={descColor}
                  >
                    {milestone.description}
                  </ListItemDescription>
                </ListItemIntroContainer>
                <FlagAndBorderConatiner>
                  <FlagIconWrapper>
                    <MilestoneFlag />
                  </FlagIconWrapper>
                  {!isLast && <Border />}
                </FlagAndBorderConatiner>
              </ListItemWrapper>
            );
          })}
        </ListWrapper>
      </Wrapper>
    </GenericWrapper>
  );
};

export default MilestonesList;
