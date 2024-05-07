
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/provider";
import CatogaryContextExport from "./context/catogary";
import { AppWrapper } from "./context/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grogin",
  description: "e-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <CatogaryContextExport>
            <AppWrapper>

              {children}
            </AppWrapper>
          </CatogaryContextExport>
        </ReduxProvider>
        </body>
    </html>
  );
}
  