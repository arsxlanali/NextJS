import { theme } from "../muiConfig/theme";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "@/utils";
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import "../fonts.css";

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
