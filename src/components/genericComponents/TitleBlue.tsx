import { Typography, styled } from "@mui/material";

interface TitleBlueProps {
  title: String;
}

const PageTitleBlue = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "225%",
  alignSelf: "left",
  maxWidth: "500px",
  marginBottom: "23px",
  background: `linear-gradient(to right, #4F84B7, #9DCDFB)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "0.37em",
  textTransform: "uppercase",

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "130%",
  },
}));

const TitleBlue = ({ title }: TitleBlueProps) => {
  return <PageTitleBlue>{title}</PageTitleBlue>;
};

export default TitleBlue;
