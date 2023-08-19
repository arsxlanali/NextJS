import { Typography, styled } from "@mui/material";

interface TitleProps {
  title: String;
}

const PageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "36px",
  lineHeight: "150%",
  textAlign: "center",
  maxWidth: "592px",
  marginBottom: "23px",
  color: theme.palette.common.black,

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "130%",
  },
}));

const Title = ({ title }: TitleProps) => {
  return <PageTitle>{title}</PageTitle>;
};

export default Title;
