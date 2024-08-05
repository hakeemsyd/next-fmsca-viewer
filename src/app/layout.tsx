import "@/styles/globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/styles/ThemeRegistry";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FMSCA Records",
    description: "FMSCA Records",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1" />
            </head>
            <body suppressHydrationWarning className={jakartaSans.className}>
                <ThemeRegistry>
                    <>{children}</>
                </ThemeRegistry>
            </body>
        </html>
    );
}
