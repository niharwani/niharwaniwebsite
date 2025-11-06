import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihar Wani - Software Engineer & Data Analyst",
  description: "Portfolio of Nihar Wani - Software Engineer specializing in full-stack development, data analysis, and cloud technologies.",
  keywords: "Software Engineer, Data Analyst, React, Next.js, Python, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
