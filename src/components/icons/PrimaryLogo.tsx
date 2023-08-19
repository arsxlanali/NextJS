import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import { PrimaryGreenLogo } from "../../../public/images";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: "10px",
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "36px",
  height: "40px",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimGray,
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "27px",

  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));

const PrimaryLogo = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Image src={PrimaryGreenLogo} alt="Logo" height={40} width={36} />
      </LogoWrapper>
      <Title>Arcompsol</Title>
    </Wrapper>
  );
};

export default PrimaryLogo;
