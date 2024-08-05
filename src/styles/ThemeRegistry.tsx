"use client";
import theme from "@/styles/Theme";
import { PropsWithChildren } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { NextAppDirEmotionCacheProvider } from "@/styles/EmotionCache";

export default function ThemeRegistry({ children }: PropsWithChildren) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    {children}
                </StyledEngineProvider>
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
