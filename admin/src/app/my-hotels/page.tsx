import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CreateHotel from '../../components/CreateHotels/CreateHotel'

export const metadata: Metadata = {
  title: "My Hotels",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const MyHotels = () => {
  return (
    <DefaultLayout>
    <CreateHotel/>
    </DefaultLayout>
  );
};

export default MyHotels;
