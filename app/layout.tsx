import { Inter } from "next/font/google";
import "./globals.css";
import PublicLayout from "./components/layout";
import { ReduxProvider } from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PublicLayout>{children}</PublicLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
