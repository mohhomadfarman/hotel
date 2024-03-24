"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useParams } from "next/navigation";
import { AddHotelContact } from "@/redux/AuthAction";
import { useDispatch } from "react-redux";

function HotelID() {
  const [create, setCreate] = useState({});
  const hotel_id = useParams();
  const dispatch = useDispatch();

  const [arry, setArry] = useState([]); // State variable to hold the array of objects

  // useEffect to push new value into arry whenever create state object changes
  useEffect(() => {
    const addPayloadToArray = () => {
        if (create.name && create.email && create.phoneNo) {
          const payload2 = {
            name: create.name,
            email: create.email,
            phoneNo: create.phoneNo,
            hotel_id: hotel_id?.hotel_id
          };
          // Updating arry with the new value
          setArry(prevArry => [...prevArry, payload2]);
        }
      };
  
        // Use a setTimeout to debounce the effect
        const debounceTimer = setTimeout(addPayloadToArray, 500); // Adjust the debounce delay as needed

        // Clear the timeout on component unmount
        return () => clearTimeout(debounceTimer);
  }, [create, hotel_id]);


  console.log(arry)

  const ConactDetails = () => {

    dispatch(AddHotelContact(arry)).then((res) => {
      if (res?.payload?.status) {
        // router.replace("/my-hotels/add-new/" + res?.payload?.hotel?._id);
        console.log(res?.payload);
      }
      if (res?.error?.code === "ERR_BAD_REQUEST") {
        setPageError(true);
      }
    });
  };

  const handleInputChange = (e, field) => {
    setCreate({ ...create, [field]: e.target.value });
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Contact Details " />
      <div className="form-wrraper Steps">
        <div className="contact-heading">
          <h2>Contact 1</h2>
        </div>
        <div className="my-flex-input flex gap-4">
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Name
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "name")}
                type="text"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Email
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "email")}
                type="email"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Contact Number
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "phoneNo")}
                type="number"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
        <div className="contact-heading">
          <h2>Contact 1</h2>
        </div>
        <div className="my-flex-input flex gap-4">
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Name
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "name")}
                type="text"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Email
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "email")}
                type="email"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Contact Number
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "phoneNo")}
                type="number"
                placeholder=""
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-botton my-flex-botton mt-3">
        <button onClick={ConactDetails} type="button">
          Next
        </button>
      </div>
    </DefaultLayout>
  );
}

export default HotelID;
