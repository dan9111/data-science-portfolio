import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
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
      <body
        className={`${libreBaskerville.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
