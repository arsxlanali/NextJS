import { Typography, styled } from "@mui/material";

interface DescriptionBlueProps {
  desc: String;
}

const PageBlueDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "225%",
  marginBottom: "23px",
  color: "#4F84B7",
  letterSpacing: "0.05em",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    lineHeight: "130%",
  },
}));

const DescriptionBlue = ({ desc }: DescriptionBlueProps) => {
  return <PageBlueDescription>{desc}</PageBlueDescription>;
};

export default DescriptionBlue;
