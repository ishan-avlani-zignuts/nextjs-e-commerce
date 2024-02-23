"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Navbar from "../../src/app/components/navbar/page";



const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
         
          {children}</Provider>
        
      </body>
    </html>
  );
}
