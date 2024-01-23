import "./globals.css";
import UserProvider from './context/user';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Le.Moche.",
  description: "Privatized Ads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5]">
        <ToastContainer />

        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
