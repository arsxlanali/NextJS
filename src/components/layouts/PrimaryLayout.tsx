import { ROUTES, TabObject } from "@/utils";
import { Box, Button, Drawer, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import PrimaryLogo from "../icons/PrimaryLogo";
import MenuIcon from "@mui/icons-material/Menu";
import PrimaryFooter from "./PrimaryFooter";

interface PrimaryLayoutProps {
  children: ReactElement;
}

interface TabProps {
  isselected: string;
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxShadow:
    "0px 21px 80px rgba(122, 117, 117, 0.05), 0px 2.62953px 10.0172px rgba(122, 117, 117, 0.025)",
}));

const Header = styled(Box)(({ theme }) => ({
  maxWidth: "1444px",
  width: "100%",
  display: "flex",
  padding: "25px 126px",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    padding: "25px 50px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "25px",
  },
}));

const LargeSrceenTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "33px",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    gap: "15px",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Tab = styled(Link)<TabProps>(({ theme, isselected }) => ({
  fontWeight: isselected==="true" ? 600 : 500,
  fontSize: "16px",
  lineHeight: "24px",
  color: isselected==="true"
    ? theme.palette.common.blueWhale
    : theme.palette.common.dimGray,
  textDecoration: "none",
}));

const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
}));

const MuiDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  minWidth: "250px",
  padding: "40px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  overflow: "scroll",
}));

const DrawerButton = styled(Button)(({ theme }) => ({
  padding: 0,
  color: theme.palette.common.black,
  fontSize: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const TABS: TabObject[] = [
    {
      label: "Home",
      route: ROUTES.HOME,
    },
    {
      label: "Services",
      route: ROUTES.SERVICES,
    },
    {
      label: "Careers",
      route: ROUTES.CAREERS,
    },
    {
      label: "About",
      route: ROUTES.ABOUT,
    },
    {
      label: "Let's Talk",
      route: ROUTES.LETS_TALK,
    },
  ];

  const getTabs = () => {
    const router = useRouter();
    
    return (
      <>
        {TABS.map((tab) => {
          if (tab.route.startsWith('#')) {
            if(router.pathname === '/careers' && tab.route === '#services') {
                  return <a 
                  key={tab.route}
                  href={tab.route} style={{textDecoration: 'none', fontWeight: '500', fontSize:'16px', color: '#656161', display: 'none'}}>{tab.label}</a>
            }
            return (
                
                <a 
                key={tab.route} 
                href={tab.route} style={{textDecoration: 'none', fontWeight: '500', fontSize:'16px', color: '#656161'}}>{tab.label}</a>
            );
          } else {
            return (
              <Tab
                isselected={`${router.pathname === tab.route}`}
                key={tab.route}
                href={tab.route}
              >
                {tab.label}
              </Tab>
            );
          }
        })}
      </>
    );
  };
  

  return (
    <Wrapper>
      <MuiDrawer
        anchor={"right"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerContainer>{getTabs()}</DrawerContainer>
      </MuiDrawer>
      <HeaderWrapper>
        <Header>
          <PrimaryLogo />
          <LargeSrceenTabsContainer>{getTabs()}</LargeSrceenTabsContainer>
          <DrawerButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon
              color="inherit"
              fontSize="inherit"
              sx={{ cursor: "pointer" }}
            />
          </DrawerButton>
        </Header>
      </HeaderWrapper>
      <Content>{children}</Content>
      <PrimaryFooter/>
    </Wrapper>
  );
};

export default PrimaryLayout;
