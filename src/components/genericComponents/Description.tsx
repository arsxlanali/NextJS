import { Typography, styled } from "@mui/material";

interface DescriptionProps {
  desc: String;
}

const PageDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "18px",
  textAlign: "center",
  maxWidth: "946px",
  marginBottom: "90px",
  color: theme.palette.common.gray,

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    marginBottom: "50px",
  },
}));

const Description = ({ desc }: DescriptionProps) => {
  return <PageDescription>{desc}</PageDescription>;
};

export default Description;
