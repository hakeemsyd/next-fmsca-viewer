"use client";
import React from "react";
import colors from "@/styles/Colors";
import mediaQuery from "css-mediaquery";
import { Plus_Jakarta_Sans, Chilanka, IBM_Plex_Mono, Homemade_Apple } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const jakartaSans = Plus_Jakarta_Sans({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const chilanka = Chilanka({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

const IBMPlexMono = IBM_Plex_Mono({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const homeMadeApple = Homemade_Apple({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        sm: true;
        screen_580: true;
        screen_654: true;
        md: true;
        xmd: true;
        lmd: true;
        lg: true;
        xlg: true;
        xl: true;
        xsm: true;
        ssm: true;
        xxl: true;
        "2xl": true;
        screen_567: true;
        screen_740: true;
        screen_860: true;
        screen_1380: true;
        screen_1430: true;
    }
}

const customBreakpoints = {
    values: {
        // Main Breakpoints
        xs: 0,
        sm: 479, // Mobile (Vertical)
        md: 768, // Mobile (Horizontal)
        lg: 991, // Tablet

        // Specific Breakpoints
        xsm: 368,
        ssm: 450,
        xmd: 930,
        lmd: 820,
        xl: 1250,
        xxl: 1300,
        xlg: 1200,
        "2xl": 1450,
        screen_580: 580,
        screen_567: 567,
        screen_654: 654,
        screen_740: 740,
        screen_860: 860,
        screen_1380: 1380,
        screen_1430: 1430,
    },
    step: 0,
};

const breakpoints = createBreakpoints({ ...customBreakpoints });

interface CustomTypographyVariants {
    displayXL: React.CSSProperties;
    displayL: React.CSSProperties;
    displayM: React.CSSProperties;
    displayS: React.CSSProperties;
    headingXL: React.CSSProperties;
    headingL: React.CSSProperties;
    headingM: React.CSSProperties;
    headingS: React.CSSProperties;
    headingXS: React.CSSProperties;
    headingXSM: React.CSSProperties;
    headingXXS: React.CSSProperties;
    labelXL: React.CSSProperties;
    labelL: React.CSSProperties;
    labelMd: React.CSSProperties;
    labelM: React.CSSProperties;
    labelS: React.CSSProperties;
    labelSB: React.CSSProperties;
    labelXS: React.CSSProperties;
    bodyXL: React.CSSProperties;
    bodyL: React.CSSProperties;
    bodyM: React.CSSProperties;
    bodyS: React.CSSProperties;
    bodySM: React.CSSProperties;
    bodySSM: React.CSSProperties;
    bodyXS: React.CSSProperties;
    bodySXX: React.CSSProperties;
    bodyMM: React.CSSProperties;
    labelML: React.CSSProperties;
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        iconBtn: true;
        roundedBtn: true;
        transparent: true;
        underlineText: true;
        exportBtn: true;
        smallBtn: true;
        filterBtn: true;
        outline: true;
        portalLoginBtn: true;
        outlinedBtn: true;
        fillBtn: true;
        addBtn: true;
    }
}
declare module "@mui/material/styles" {
    interface CommonColors {
        Elm: string;
        Paua: string;
        Nero: string;
        Fern: string;
        White: string;
        Mabel: string;
        Fiord: string;
        Cyprus: string;
        Black: string;
        Mischka: string;
        Spindle: string;
        Cinnabar: string;
        Paradiso: string;
        Tangaroa: string;
        Lavender: string;
        SeaGreen: string;
        LilyWhite: string;
        OysterBay: string;
        SteelBlue: string;
        Submarine: string;
        RoyalBlue: string;
        SilverTree: string;
        MabelLight: string;
        ShuttleGrey: string;
        HummingBird: string;
        FringyFlower: string;
        LavenderLight: string;
        MidnightExpress: string;
        PrimaryGradient: string;
        VistaBlue: string;
        LowOpacity: string;
        CloudBurst: string;
        TransparentWhite: string;
        FrostedMint: string;
        ModalGradient: string;
        LinkWater: string;
        Linen: string;
        Coral: string;
        Valencia: string;
        BondiBlue: string;
        Cobalt: string;
        EasternBlue: string;
        Pelorous: string;
        PattensBlueV2: string;
        PineGreen: string;
        DarkGrey: string;
    }
    interface TypographyVariants extends CustomTypographyVariants {}
    interface TypographyVariantsOptions extends CustomTypographyVariants {}
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        displayXL: true;
        displayL: true;
        displayM: true;
        displayS: true;
        headingXL: true;
        headingL: true;
        headingM: true;
        headingML: true;
        headingS: true;
        headingXS: true;
        headingXSM: true;
        headingXXS: true;
        labelXL: true;
        labelL: true;
        labelM: true;
        labelS: true;
        labelXS: true;
        bodyXL: true;
        bodyL: true;
        bodyM: true;
        bodyS: true;
        bodyXS: true;
        labelMd: true;
        labelSB: true;
        bodySM: true;
        bodySSM: true;
        bodyMM: true;
        labelML: true;
        bodySSX: true;
        bodySXX: true;
        timelineBody: true;
        chequeFamily: true;
        chequeTitle: true;
        chequeAddr: true;
        chequeSign: true;
    }
}

declare module "@mui/material/Chip" {
    interface ChipPropsVariantOverrides {
        standard: true;
        small: true;
        status: true;
        success: true;
        process: true;
    }
}

const baseFontStyle = {
    fontFamily: jakartaSans.style.fontFamily,
};

interface createTypographyVariantProps {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    fontSizeLg?: string;
    fontSizeMd?: string;
    fontSizeSm?: string;
}

interface TypographyStyles {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    fontFamily: string;
    [key: `@media (max-width: ${number}px)`]: {
        fontSize: string;
    };
}

const createTypographyVariant = ({
    fontSize,
    fontWeight,
    lineHeight,
    fontSizeLg,
    fontSizeMd,
    fontSizeSm,
}: createTypographyVariantProps) => {
    const styles: TypographyStyles = {
        ...baseFontStyle,
        fontSize,
        fontWeight,
        lineHeight,
    };

    // Add media queries conditionally
    if (fontSizeLg) {
        styles[`@media (max-width: ${customBreakpoints.values.lg}px)`] = {
            fontSize: fontSizeLg,
        };
    }
    if (fontSizeMd) {
        styles[`@media (max-width: ${customBreakpoints.values.md}px)`] = {
            fontSize: fontSizeMd,
        };
    }
    if (fontSizeSm) {
        styles[`@media (max-width: ${customBreakpoints.values.sm}px)`] = {
            fontSize: fontSizeSm,
        };
    }

    return styles;
};

const typographyOptions = {
    fontFamily: jakartaSans.style.fontFamily,
    color: colors.Tangaroa,

    displayXL: createTypographyVariant({
        fontSize: "96px",
        fontWeight: 700,
        lineHeight: "100%",
        fontSizeLg: "86px",
        fontSizeMd: "76px",
        fontSizeSm: "60px",
    }),

    displayL: createTypographyVariant({
        fontSize: "80px",
        fontWeight: 700,
        lineHeight: "110%",
        fontSizeLg: "72px",
        fontSizeMd: "64px",
        fontSizeSm: "48px",
    }),

    displayM: createTypographyVariant({
        fontSize: "72px",
        fontWeight: 700,
        lineHeight: "115%",
        fontSizeLg: "65px",
        fontSizeMd: "56px",
        fontSizeSm: "40px",
    }),

    displayS: createTypographyVariant({
        fontSize: "28px",
        fontWeight: 700,
        lineHeight: "120%",
        fontSizeLg: "25px",
        fontSizeMd: "22px",
        fontSizeSm: "20px",
    }),

    headingXL: createTypographyVariant({
        fontSize: "56px",
        fontWeight: 700,
        lineHeight: "100%",
        fontSizeLg: "50px",
        fontSizeMd: "40px",
        fontSizeSm: "32px",
    }),

    headingL: createTypographyVariant({
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: "110%",
        fontSizeLg: "40px",
        fontSizeMd: "32px",
        fontSizeSm: "28px",
    }),

    headingM: createTypographyVariant({
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: "120%",
        fontSizeLg: "32px",
        fontSizeMd: "28px",
        fontSizeSm: "24px",
    }),

    headingS: createTypographyVariant({
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: "125%",
        fontSizeLg: "28px",
        fontSizeMd: "24px",
        fontSizeSm: "20px",
    }),

    headingXS: createTypographyVariant({
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: "130%",
        fontSizeLg: "20px",
        fontSizeMd: "18px",
    }),

    headingXXS: createTypographyVariant({
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "135%",
    }),

    labelXL: createTypographyVariant({
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "140%",
        fontSizeMd: "18px",
    }),

    labelL: createTypographyVariant({
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "150%",
        fontSizeMd: "16px",
    }),

    labelM: createTypographyVariant({
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "150%",
        fontSizeMd: "14px",
    }),

    labelS: createTypographyVariant({
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "150%",
    }),

    labelXS: createTypographyVariant({
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "150%",
    }),

    bodyXL: createTypographyVariant({
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "150%",
        fontSizeMd: "18px",
    }),

    bodyL: createTypographyVariant({
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "150%",
        fontSizeMd: "16px",
    }),

    bodyM: createTypographyVariant({
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "150%",
        fontSizeMd: "14px",
    }),

    bodyS: createTypographyVariant({
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "150%",
    }),

    bodyXS: createTypographyVariant({
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "150%",
    }),
    headingML: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "120%",
        [breakpoints.down("sm")]: {
            fontSize: "16px",
        },
    },

    headingXSM: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "155.556%",
    },

    labelML: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "148.5%",
        [breakpoints.down("xsm")]: {
            fontSize: "12px",
        },
    },

    labelSB: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "142.857%",
    },
    labelMd: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "142.857%",
    },
    bodyMM: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "20px",
    },
    bodySM: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "142.857%",
    },
    bodySSM: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
    },
    bodySSX: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: "20px",
    },
    bodySXX: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "13px",
        fontWeight: 700,
        lineHeight: "20px",
    },
    timelineBody: {
        fontFamily: jakartaSans.style.fontFamily,
        fontSize: "12.14px",
        fontWeight: 500,
        color: colors.Bismark,
    },
    chequeFamily: {
        fontFamily: chilanka.style.fontFamily,
        fontSize: "19px",
        lineHeight: "24px",
        color: colors.Black,
        [breakpoints.down("screen_567")]: {
            fontSize: "15px",
        },
    },
    chequeTitle: {
        fontFamily: IBMPlexMono.style.fontFamily,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "26px",
        color: colors.Tangaroa,
    },
    chequeAddr: {
        fontFamily: IBMPlexMono.style.fontFamily,
        fontSize: "13.36px",
        fontWeight: 400,
        lineHeight: "16.75px",
        color: colors.Tangaroa,
    },
    chequeSign: {
        fontFamily: homeMadeApple.style.fontFamily,
        fontSize: "30px",
        lineHeight: "15px",
        color: colors.Tangaroa,
        [breakpoints.down("screen_567")]: {
            fontSize: "15px",
        },
    },
};

const themeOptions: ThemeOptions = {
    typography: typographyOptions,
    palette: {
        background: {
            default: colors.White,
        },
        primary: {
            main: colors.MidnightExpress,
        },
        secondary: {
            main: colors.ShuttleGrey,
        },
        text: {
            primary: colors.MidnightExpress,
        },
        common: {
            Elm: colors.Elm,
            Paua: colors.Paua,
            Fern: colors.Fern,
            Nero: colors.Nero,
            Fiord: colors.Fiord,
            Mabel: colors.Mabel,
            MabelLight: colors.MabelLight,
            FrostedMint: colors.FrostedMint,
            Mischka: colors.Mischka,
            Spindle: colors.Spindle,
            Cinnabar: colors.Cinnabar,
            Valencia: colors.Valencia,
            Paradiso: colors.Paradiso,
            Tangaroa: colors.Tangaroa,
            Lavender: colors.Lavender,
            SeaGreen: colors.SeaGreen,
            LilyWhite: colors.LilyWhite,
            OysterBay: colors.OysterBay,
            Submarine: colors.Submarine,
            SteelBlue: colors.SteelBlue,
            RoyalBlue: colors.RoyalBlue,
            SilverTree: colors.SilverTree,
            HummingBird: colors.HummingBird,
            TransparentWhite: colors.TransparentWhite,
            ShuttleGrey: colors.ShuttleGrey,
            FringyFlower: colors.FringyFlower,
            LavenderLight: colors.LavenderLight,
            MidnightExpress: colors.MidnightExpress,
            Cyprus: colors.Cyprus,
            LinkWater: colors.LinkWater,
            Linen: colors.Linen,
            Coral: colors.Coral,
            BondiBlue: colors.BondiBlue,
            ModalGradient: colors.ModalGradient,
            PattensBlueV2: colors.PattensBlueV2,
            Cobalt: colors.Cobalt,
            Pelorous: colors.Pelorous,
            PineGreen: colors.PineGreen,
            DarkGrey: colors.DarkGrey,
            EasternBlue: colors.EasternBlue,
        },
    },
    breakpoints: customBreakpoints,
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "16px 16px 0px 0px",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 1000px ${colors.White} inset`,
                        color: "red",
                        background: "green",
                    },
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: colors.Mischka,
                    },
                },
            },
        },
        MuiDivider: {
            variants: [
                {
                    props: { variant: "fullWidth" },
                    style: {
                        borderColor: colors.LinkWater,
                    },
                },
            ],
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    color: colors.MidnightExpress,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "182%",
                    "& :-webkit-autofill": {
                        boxShadow: "none !important",
                        webkitBackgroundClip: "text !important",
                        backgroundClip: "text !important",
                        webkitTextFillColor: "black",
                    },
                    "& .muiautocomplete-option": {
                        padding: 0,
                    },
                    "&:focus": {
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        borderRadius: "0px",
                        MozBoxShadow: "none",
                        WebkitBoxShadow: "none",
                    },
                },
            },
        },
        MuiUseMediaQuery: {
            defaultProps: {
                ssrMatchMedia: query => ({
                    matches: mediaQuery.match(query, {}),
                }),
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    margin: "0px",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    backgroundColor: colors.BondiBlue,
                    height: "56px",
                    maxWidth: "374px",
                    minWidth: "173px",
                    cursor: "pointer",
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: colors.BondiBlue,
                        color: colors.White,
                    },
                    ":disabled": {
                        background: colors.Mischka,
                        color: colors.White,
                    },
                    [breakpoints.down("sm")]: {
                        maxWidth: "90vw",
                    },
                    color: colors.White,
                    ...(ownerState.size === "large" && {
                        fontWeight: 800,
                        fontSize: "18px",
                        lineHeight: "155.556%",
                        fontFamily: jakartaSans.style.fontFamily,
                    }),
                    ...(ownerState.size === "medium" && {
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "150%",
                        fontFamily: jakartaSans.style.fontFamily,
                    }),

                    ...(ownerState.size === "small" && {
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "184.615%",
                        fontFamily: jakartaSans.style.fontFamily,
                    }),
                }),
            },
            variants: [
                {
                    props: { variant: "roundedBtn" },
                    style: {
                        fontSize: "14px",
                        maxWidth: "160px",
                        minWidth: "160px",
                        fontWeight: "600",
                        color: colors.Paua,
                        borderRadius: "32px",
                        textTransform: "none",
                        letterSpacing: "-0.7px",
                        backgroundColor: colors.White,
                        border: `2px solid ${colors.Lavender}`,
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.Fern,
                            backgroundColor: "rgba(91, 181, 118, 0.15)",
                        },
                        ":active": {
                            color: colors.Fern,
                            backgroundColor: "rgba(91, 181, 118, 0.15)",
                        },
                    },
                },
                {
                    props: { variant: "underlineText" },
                    style: {
                        width: "auto",
                        border: `none`,
                        height: "auto",
                        padding: "0px 0px 0.5px",
                        minWidth: "0px",
                        fontSize: "12px",
                        fontWeight: "600",
                        lineHeight: "100%",
                        borderRadius: "0px",
                        color: colors.Fiord,
                        textTransform: "none",
                        maxWidth: "max-content",
                        borderBottom: "1px solid",
                        backgroundColor: "transparent",
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.Fern,
                            backgroundColor: "transparent",
                        },
                        [breakpoints.down("sm")]: {
                            maxWidth: "max-content",
                        },
                    },
                },
                {
                    props: { variant: "transparent" },
                    style: {
                        width: "auto",
                        border: `none`,
                        height: "auto",
                        padding: "0px",
                        minWidth: "0px",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "182.3%",
                        textTransform: "none",
                        maxWidth: "max-content",
                        color: colors.MidnightExpress,
                        backgroundColor: "transparent",
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.MidnightExpress,
                            backgroundColor: "transparent",
                        },
                        ":disabled": {
                            color: colors.Mischka,
                            backgroundColor: "transparent",
                        },
                    },
                },
                {
                    props: { variant: "iconBtn" },
                    style: {
                        border: `none`,
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "500",
                        textAlign: "center",
                        alignItems: "center",
                        lineHeight: "142.3%",
                        padding: "0px 24px",
                        minWidth: "100%",
                        textTransform: "none",
                        justifyContent: "center",
                        color: colors.MidnightExpress,
                        backgroundColor: "transparent",
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.MidnightExpress,
                            backgroundColor: "transparent",
                        },
                    },
                },
                {
                    props: { variant: "exportBtn" },
                    style: {
                        border: `none`,
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                        alignItems: "center",
                        lineHeight: "20px",
                        justifyContent: "center",
                        borderRadius: "8px",
                        height: "40px",
                        minWidth: "136px",
                        color: colors.White,
                        background: colors.BondiBlue,
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.White,
                            backgroundColor: colors.BondiBlue,
                        },
                    },
                },
                {
                    props: { variant: "outlinedBtn" },
                    style: {
                        gap: "8px",
                        height: "32px",
                        display: "flex",
                        fontSize: "12px",
                        fontWeight: "600",
                        borderRadius: "8px",
                        lineHeight: "133.3%",
                        padding: "12px 16px",
                        alignItems: "center",
                        textTransform: "none",
                        color: colors.Tangaroa,
                        justifyContent: "center",
                        backgroundColor: "transparent",
                        border: `1px solid ${colors.Tangaroa}`,
                        fontFamily: jakartaSans.style.fontFamily,
                        ":disabled": {
                            background: colors.White,
                            color: colors.Mischka,
                            border: `1px solid ${colors.Mischka}`,
                        },
                        "&:hover": {
                            color: colors.Tangaroa,
                            backgroundColor: "transparent",
                            border: `1px solid ${colors.Mabel}`,
                        },
                    },
                },
                {
                    props: { variant: "fillBtn" },
                    style: {
                        gap: "8px",
                        height: "32px",
                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "600",
                        borderRadius: "24px",
                        lineHeight: "133.3%",
                        padding: "6px 20px",
                        alignItems: "center",
                        textTransform: "none",
                        color: colors.Tangaroa,
                        justifyContent: "center",
                        backgroundColor: colors.RoseBud,

                        fontFamily: jakartaSans.style.fontFamily,
                        ":disabled": {
                            background: colors.White,
                            color: colors.Mischka,
                        },
                        "&:hover": {
                            color: colors.Tangaroa,
                            backgroundColor: "transparent",
                            border: `1px solid ${colors.Mabel}`,
                        },
                    },
                },
                {
                    props: { variant: "addBtn" },
                    style: {
                        gap: "8px",
                        width: "100%",
                        MaxWidth: "169px",
                        height: "100%",

                        display: "flex",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: colors.White,
                        borderRadius: "8px",
                        lineHeight: "142.8%",
                        alignItems: "center",
                        textTransform: "none",
                        justifyContent: "center",
                        backgroundColor: colors.BondiBlue,
                        fontFamily: jakartaSans.style.fontFamily,
                    },
                },
                {
                    props: { variant: "smallBtn" },
                    style: {
                        border: `1px solid ${colors.Solitude}`,
                        display: "flex",
                        fontSize: "13px",
                        fontWeight: "600",
                        textAlign: "center",
                        alignItems: "center",
                        lineHeight: "20px",
                        height: "32px",
                        justifyContent: "center",
                        borderRadius: "8px",
                        width: "64px",
                        minWidth: "64px",
                        color: colors.Tangaroa,
                        background: colors.White,
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.Tangaroa,
                            background: colors.White,
                        },
                    },
                },
                {
                    props: { variant: "filterBtn" },
                    style: {
                        border: `none`,
                        display: "flex",
                        fontSize: "13px",
                        fontWeight: "500",
                        textAlign: "center",
                        alignItems: "center",
                        lineHeight: "20px",
                        height: "40px",
                        justifyContent: "center",
                        borderRadius: "8px",
                        padding: "12px",
                        color: colors.LilyWhite,
                        background: colors.Fiord,
                        fontFamily: jakartaSans.style.fontFamily,
                        "&:hover": {
                            color: colors.LilyWhite,
                            background: colors.Fiord,
                        },
                    },
                },
                {
                    props: { variant: "outline" },
                    style: {
                        color: colors.Tangaroa,
                        textAlign: "center",
                        fontFamily: jakartaSans.style.fontFamily,
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "20px",
                        height: "100%",
                        width: "100%",
                        minHeight: "40px",
                        minWidth: "83px",
                        borderRadius: "12px",
                        background: colors.LavendarMist,
                        border: `1px solid ${colors.LavendarMist}`,
                        "&:hover": {
                            backgroundColor: colors.LavendarMist,
                            color: colors.Tangaroa,
                        },
                    },
                },
                {
                    props: { variant: "portalLoginBtn" },
                    style: {
                        color: colors.White,
                        textAlign: "center",
                        fontFamily: jakartaSans.style.fontFamily,
                        fontSize: 14,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "177.778% ",
                        height: "100%",
                        width: "100%",
                        maxHeight: "48px",
                        maxWidth: "409px",
                        aspectRatio: 347 / 48,
                        borderRadius: "8px",
                        background: colors?.BondiBlue,
                    },
                },
            ],
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    transition: "0.3s ease border-color",
                    fontFamily: jakartaSans.style.fontFamily,
                },
            },
            variants: [
                {
                    props: { variant: "standard" },
                    style: {
                        background: "transparent",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                    },
                },
            ],
        },
        MuiRadio: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    width: "18px",
                    height: "18px",
                    backgroundColor: colors.White,
                    transition: "0.3s ease background-color",
                    "& .MuiSvgIcon-root": {
                        border: "none",
                        borderRadius: "50%",
                    },
                    "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
                        color: colors.LinkWater,
                    },

                    "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                        color: colors.Tangaroa,
                    },
                    "&.Mui-checked .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
                        color: colors.Tangaroa,
                    },

                    ...(ownerState.size === "small" && {
                        width: "18px",
                        height: "18px",
                        backgroundColor: colors.White,
                        "& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
                            color: colors.LinkWater,
                        },
                        "& .MuiSvgIcon-root + .MuiSvgIcon-root": {
                            color: colors.Tangaroa,
                            border: "1.5px solid white",
                        },
                        "&.Mui-checked .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)": {
                            color: colors.Tangaroa,
                        },
                    }),
                }),
            },
        },

        MuiModal: {
            styleOverrides: {
                root: {
                    outline: "none",
                    background: "rgba(18, 25, 38, 0.80)",
                    "&:focus": {
                        outline: "none",
                    },
                    "&:focus-visible": {
                        outline: "none",
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    width: "24px",
                    height: "24px",
                    color: colors.Mabel,
                    background: "transparent",
                    "&.Mui-checked": {
                        color: colors.SilverTree,
                    },
                    ":hover": {
                        background: "transparent",
                    },
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: 36,
                    height: 20,
                    padding: 0,
                    "& .MuiSwitch-switchBase": {
                        padding: 0,
                        margin: 2,
                        transitionDuration: "300ms",
                        "&.Mui-checked": {
                            transform: "translateX(16px)",
                            color: colors.White,
                            "& + .MuiSwitch-track": {
                                backgroundColor: colors.BondiBlue,
                                opacity: 1,
                                border: 0,
                            },
                            "&.Mui-disabled + .MuiSwitch-track": {
                                opacity: 0.5,
                            },
                        },
                        "&.Mui-focusVisible .MuiSwitch-thumb": {
                            color: colors.BondiBlue,
                            border: `6px solid ${colors.White}`,
                        },
                        "&.Mui-disabled .MuiSwitch-thumb": {
                            color: colors.White,
                        },
                        "&.Mui-disabled + .MuiSwitch-track": {
                            opacity: 0.7,
                        },
                    },
                    "& .MuiSwitch-thumb": {
                        boxSizing: "border-box",
                        width: 16,
                        height: 16,
                    },
                    "& .MuiSwitch-track": {
                        borderRadius: 26 / 2,
                        backgroundColor: colors.WhiteLilac,
                        opacity: 1,
                    },
                },
            },
        },
        MuiTabs: {
            variants: [
                {
                    props: { variant: "standard" },
                    style: {
                        "& .MuiTabs-indicator": {
                            display: "none",
                        },
                        "& .MuiTab-root": {
                            height: "34px !important",
                            padding: "12px 16px !important",
                            color: colors.Fiord,
                            margin: "0px 10px 0px 0px",
                        },
                        "& .Mui-selected": {
                            backgroundColor: `${colors.LavendarMist} !important`,
                            height: "34px",
                            padding: "12px 16px !important",
                            color: colors.Tangaroa,
                        },
                        "& .MuiButtonBase-root": {
                            borderRadius: "8px",
                            color: colors.Fiord,
                        },
                        "& .MuiButtonBase-root ": {
                            padding: 0,
                            height: "34px",
                            minHeight: "34px",
                            fontSize: "14px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                        },
                    },
                },
                {
                    props: { variant: "scrollable" },
                    style: {
                        "& .MuiTabs-indicator": {
                            display: "none",
                        },
                        "& .MuiTab-root": {
                            height: "34px !important",
                            padding: "12px 16px !important",
                            color: colors.Fiord,
                        },
                        "& .Mui-selected": {
                            backgroundColor: colors.LavendarMist,
                            height: "34px",
                            padding: "12px 16px !important",

                            width: "auto",
                            margin: "0px 10px 0px 0px",
                        },
                        "& .MuiButtonBase-root": {
                            borderRadius: "8px",
                            color: colors.Tangaroa,
                        },
                        "& .MuiButtonBase-root ": {
                            padding: 0,
                            height: "34px",
                            minHeight: "34px",
                            fontSize: "14px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                        },
                    },
                },
            ],
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: "standard" },
                    style: {
                        background: colors.Magnolia,
                        border: `none`,
                        borderRadius: "16px",
                        height: "25px",
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                        color: colors.Windsor,
                    },
                },
                {
                    props: { variant: "small" },
                    style: {
                        display: "flex",
                        minWidth: "79px",
                        height: "20px",
                        padding: "0px 4px",
                        justifyContent: "center",
                        alignItems: "center",
                        color: colors.SteelBlue,
                        background: colors.Lavender,
                        textTransform: "uppercase",
                        fontFamily: jakartaSans.style.fontFamily,
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "20px",
                    },
                },
                {
                    props: { variant: "success" },
                    style: {
                        display: "flex",
                        minWidth: "79px",
                        height: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        color: colors.Jewel,
                        background: colors.MaginMint,
                        textTransform: "uppercase",
                        fontFamily: jakartaSans.style.fontFamily,
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "20px",
                    },
                },
                {
                    props: { variant: "process" },
                    style: {
                        display: "flex",
                        minWidth: "79px",
                        height: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                        color: colors.FaluRed,
                        background: colors.PeachYellow,
                        textTransform: "uppercase",
                        fontFamily: jakartaSans.style.fontFamily,
                        fontSize: "10px",
                        fontWeight: 600,
                        lineHeight: "20px",
                    },
                },
            ],
        },
    },
};

const theme = createTheme(themeOptions);

export default theme;
