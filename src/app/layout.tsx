import type { Metadata } from "next";
import "./globals.css";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import { Agdasima } from "next/font/google";


const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${agdasima.className} antialiased`}
      >
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
