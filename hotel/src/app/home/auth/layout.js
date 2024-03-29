
import { Inter } from "next/font/google";
import "./login.scss";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User Auth",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
      <Header/>
      <ToastContainer/>
      {children}
      <Footer/>
 
      </body>
    </html>
  );
}
