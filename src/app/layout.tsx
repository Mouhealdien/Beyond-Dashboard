"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "../components/SideBar";
import Providers from "@/components/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import AuthLayout from "@/components/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const noLayoutPaths = ["/login"];

  const isNoLayout = noLayoutPaths.includes(pathname);

  if (isNoLayout) {
    return (
      <html lang="en">
        <body className={" bg-third font-['Poppins']"}>
          <Providers>
            <ToastContainer />
            <div className="p-4 text-fourth ">{children}</div>
          </Providers>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={" bg-third font-['Poppins']"}>
        <Providers>
          <AuthLayout>
            <ToastContainer />
            <SideBar />
            <div className="p-4 text-fourth  sm:ml-64">{children}</div>
          </AuthLayout>
        </Providers>
      </body>
    </html>
  );
}
