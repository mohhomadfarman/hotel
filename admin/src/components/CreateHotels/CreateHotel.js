"use client";
import React, { useEffect, useState } from "react";
import "./index.css";

import { useDispatch } from "react-redux";
import { createHotelStep1 } from "@/redux/AuthAction";
import { useRouter } from "next/navigation";

function CreateHotel() {
  const [create, setCreate] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [pageError, setPageError] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [images, setImages] = useState([]);
  const [step, setStep] = useState("1");


  const dispatch = useDispatch();
  const router = useRouter()
  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setImages(files);
  };
  const CreateProfile = () => {
    const formData = new FormData();

    // Append each field's data to the FormData object
    formData.append("title", create.hotel_title ? create.hotel_title : "");
    formData.append("website", create.hotel_website) ? create.hotel_website :"";
    formData.append("youtubeLinks", create.youtube_link ? create.youtube_link :"");
    formData.append("country", selectedOption ? selectedOption :"");
    // Append data from other input fields

    formData.append(`file`, images[0]);

    // You can also append data from textarea fields
    formData.append("about", create.about_hotel ? create.about_hotel :"" );
    formData.append("location", create.location ? create.location:"" );
    formData.append("rooms_and_suites", create.rooms_and_suites ? create.rooms_and_suites :"");
    formData.append("restaurants_and_bar", create.restaurants_and_bar ? create.restaurants_and_bar :"");
    formData.append("spa_and_wellness", create.spa_and_wellness);
    formData.append("other_facilities", create.other_facilities);
    formData.append("additional_information", create.additional_information);

    dispatch(createHotelStep1(formData)).then((res)=>{
      console.log(res?.payload?.status)
      if(res?.payload?.status){
        router.replace("/my-hotels/add-new/"+res?.payload?.hotel?._id)
        console.log(res?.payload?.hotel?._id)
      }
      if(res?.error?.code === "ERR_BAD_REQUEST"){
        setPageError(true)
      }
    });


  };

  const handleInputChange = (e, field) => {
    setCreate({ ...create, [field]: e.target.value });
  };

  return (
    <div>
      <div>

        <label className="test mb-2.5 block font-medium text-black dark:text-white">
          Hotel Title
        </label>
        <div className="relative">
          <input
            onChange={(e) => handleInputChange(e, "hotel_title")}
            type="text"
            placeholder=""
            className="bg-rgb(241 245 249 /  var(--tw-bg-opacity)) mb-4 w-full w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="my-flex-input flex gap-4">
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Hotel Website
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "hotel_website")}
                type="text"
                placeholder="https://www.luxuryhotelsmagazines.com/"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              YouTube Link
            </label>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange(e, "youtube_link")}
                type="text"
                placeholder="https://www.luxuryhotelsmagazines.com/"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full ">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Select Country
            </label>
            <select
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                changeTextColor();
              }}
              className={`bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) relative mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                isOptionSelected ? "text-black dark:text-white" : ""
              }`}
            >
              <option
                value=""
                disabled
                className="text-body dark:text-bodydark"
              >
                Select Name
              </option>
              <option value="USA" className="text-body dark:text-bodydark">
                USA
              </option>
              <option value="UK" className="text-body dark:text-bodydark">
                UK
              </option>
              <option value="Canada" className="text-body dark:text-bodydark">
                Canada
              </option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Choose Images
          </label>
          <div className="relative">
            <input
              onChange={handleImageChange}
              type="file"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor=""
            className="form-label mb-2.5 block font-medium text-black dark:text-white"
          >
            About Hotel*
          </label>
          <textarea
            onChange={(e) => handleInputChange(e, "about_hotel")}
            placeholder=""
            className="form-control bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-3 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name=""
            id=""
            rows="2"
          ></textarea>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Location*
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleInputChange(e, "location")}
              type="text"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Rooms & Suites*
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleInputChange(e, "rooms_and_suites")}
              type="text"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Restaurants & Bar (Optional)
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleInputChange(e, "restaurants_and_bar")}
              type="text"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Spa & Wellnes (Opitonal)
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleInputChange(e, "spa_and_wellness")}
              type="text"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Other Facilities (Optional)
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleInputChange(e, "other_facilities")}
              type="text"
              placeholder=""
              className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
            />
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor=""
            className="form-label mb-2.5 block font-medium text-black dark:text-white"
          >
            Additional Information (Optional)
          </label>
          <textarea
            onChange={(e) => handleInputChange(e, "additional_information")}
            className="form-control bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            name=""
            id=""
            rows="2"
          ></textarea>
        </div>

        {pageError === true && <span className="w-100 d-flex p-4" style={{padding:"10px", background:"#ff0000", color:"#fff", marginBottom:"16px"}}>Please Fill all the details</span>}

        <div className="d-flex btn-footer gap-5 ">
          <div className="my-botton">
            <button type="button" onClick={CreateProfile}>
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateHotel;
