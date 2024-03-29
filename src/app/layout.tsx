import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArcadeX",
  description: "Sistema de leituras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.png" />
      <body className={dmSans.className}>
        <ToastContainer
          position="bottom-center"
          pauseOnFocusLoss={false}
          stacked
          transition={Slide}
          hideProgressBar
        />
        {children}
      </body>
    </html>
  );
}
