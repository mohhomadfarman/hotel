import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "My offers",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const OffersPage = () => {
  return (
    <DefaultLayout>
    
    <h1>offers</h1>
    </DefaultLayout>
  );
};

export default OffersPage;
