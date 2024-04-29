import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn NextJs",
  description: "Learn nextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <section>
        <Nav></Nav>
        {children}
        </section>
        </body>
    </html>
  );
}
