import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Zydan Priambada | IBM Certified Data Scientist",
    template: "%s | Muhammad Zydan Priambada",
  },
  description: "Portfolio of Muhammad Zydan Priambada, a Certified Data Scientist specializing in Python, SQL, and end-to-end data pipelines.",
  keywords: ["Data Scientist", "IBM Certified", "Python", "SQL", "Data Science Portfolio", "Machine Learning", "Data Analysis"],
  authors: [{ name: "Muhammad Zydan Priambada" }],
  creator: "Muhammad Zydan Priambada",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Zydan Priambada | IBM Certified Data Scientist",
    description: "Portfolio of Muhammad Zydan Priambada, a Certified Data Scientist specializing in Python, SQL, and end-to-end data pipelines.",
    siteName: "Muhammad Zydan Priambada Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
