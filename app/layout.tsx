import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import Provider from "./api/user/provider";

const appFont = DM_Sans({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "UI UX Generator App",
  description: "Generate High Free UIUX Mobile and Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={appFont.className} suppressHydrationWarning>
        <Provider>
 {children}
        </Provider>
       
      </body>
    </html>
    </ClerkProvider>
  );
}
