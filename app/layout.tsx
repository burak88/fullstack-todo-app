import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import "react-toastify/dist/ReactToastify.min.css";
import { Providers } from "./ApolloProvider";
import { NextAuthProv } from "./NextAuthProv";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProv>
          <Providers>
            <StoreProvider>
              {children}
            </StoreProvider>
          </Providers>
        </NextAuthProv>
      </body>
    </html>
  );
}
