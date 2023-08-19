import { Box, styled } from "@mui/material";
import { ReactElement } from "react";

interface GenericWrapperProps {
  children: ReactElement;
  backgroundcolor: String;
}

interface WrapperProps {
  backgroundcolor: String;
}

const Wrapper = styled(Box)<WrapperProps>(({ theme, backgroundcolor }) => ({
  width: "100%",
  maxWidth: "1444px",
  margin: "0 auto",
  background: `${backgroundcolor}`,
}));

const GenericWrapper = ({ children, backgroundcolor }: GenericWrapperProps) => {
  return <Wrapper backgroundcolor={backgroundcolor}>{children}</Wrapper>;
};

export default GenericWrapper;
