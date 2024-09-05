import { Manrope } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Wash & Go",
  description: "Your trusted partner in car care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white`}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
