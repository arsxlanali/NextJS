import { colors } from "@/styles/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    black: string;
    gray: string;
    dimGray: string;
    blueWhale: string;
    mortar: string;
    deepSkyBlue: string;
    heather: string;
    suvaGreyPointEight: string;
    prussianBlue: string;
    dimWhite: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

export const theme = createTheme({
  palette: {
    common: {
      black: colors.black,
      gray: colors.gray,
      dimGray: colors.dimGray,
      blueWhale: colors.blueWhale,
      mortar: colors.mortar,
      deepSkyBlue: colors.deepSkyBlue,
      heather: colors.heather,
      suvaGreyPointEight: colors.suvaGreyPointEight,
      prussianBlue: colors.prussianBlue,
      dimWhite: colors.dimWhite,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background:
              "linear-gradient(90.42deg, #38B089 -24.56%, #03432E 104.46%)",
            borderRadius: "26px",
            fontFamily: ["Poppins", "sans-serif"].join(","),
            textTransform: "none",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "17px",
            color: "#ffffff",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: colors.prussianBlue,
            borderRadius: "10px",
            fontFamily: ["Poppins", "sans-serif"].join(","),
            textTransform: "none",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "18px",
            color: "#ffffff",

            ":hover": {
              background: colors.prussianBlue,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            background: "white",
            border: "border: 1px solid #2F91E0",
            borderRadius: "10px",
            fontFamily: ["Poppins", "sans-serif"].join(","),
            textTransform: "none",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "17px",
            color: "#ffffff",
          },
        },
      ],
    },
  },
});
