import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import TopNavigation from "./ui/TopNavigation";
import { Footer } from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlobetrotterGram - Memorise your travels",
  description: "Memorise your travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavigation />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
