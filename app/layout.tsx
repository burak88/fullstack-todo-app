import { Inter } from "next/font/google";
import "./globals.css"
import PublicLayout from "./components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PublicLayout children={children}/>
      </body>
    </html>
  );
}