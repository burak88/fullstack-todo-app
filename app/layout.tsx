import { Inter } from "next/font/google";
import "./globals.css";
import PublicLayout from "./components/layout";
import { StoreProvider } from "./StoreProvider";
import "react-toastify/dist/ReactToastify.min.css";
import { Providers } from "./ApolloProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <StoreProvider>
            <PublicLayout>{children}</PublicLayout>
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}
