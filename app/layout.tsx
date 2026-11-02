import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihar Wani - Data Engineer | Analytics | Python · SQL · ETL",
  description: "Portfolio of Nihar Wani - Data Engineer specializing in Python, SQL, and ETL pipelines for financial services, with background in software engineering and analytics.",
  keywords: "Data Engineer, Data Analytics, ETL, Python, SQL, Polars, Airflow, Portfolio",
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
