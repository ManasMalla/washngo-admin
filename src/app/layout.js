"use client";
import { Manrope } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import { usePathname } from "next/navigation";

const manrope = Manrope({ subsets: ["latin"] });

// export const metadata = {
//   title: "Wash & Go",
//   description: "Your trusted partner in car care",
// };

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const isServices = pathName !== "/";
  const isAdminRoute =
    pathName.startsWith("/admin") || pathName.startsWith("/receipt");
  return (
    <html lang="en">
      <body
        className={` ${manrope.className} ${
          isAdminRoute ? "text-white" : "text-white"
        }`}
      >
        <div className="bg-black/30">
          {!isAdminRoute && <Navbar />}
          <div className={`${isServices ? "h-8" : ""}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
