"use client";
import React, { useEffect, useState } from "react";
import "./index.css";

import { useDispatch } from "react-redux";
import { createHotelStep1 } from "@/redux/AuthAction";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HotelData } from "../../tempData/HotelData";

function CreateHotel() {
  const [create, setCreate] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [pageError, setPageError] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [images, setImages] = useState([]);
  const [other_information, setOther_information] = useState({});
  const [roomAminitysArry, setRoomAminitysArry] = useState({});
  const [hotelFacilites, setHotelFacilites] = useState({});
  const [step, setStep] = useState("1");

const othersData =[other_information?.other_information1,other_information?.other_information2,other_information?.other_information3,other_information?.other_information4]


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
    formData.append("other_information", othersData);
    formData.append("numberOfBars", create.numberOfBars);
    formData.append("numberOfPools", create.numberOfPools);
    formData.append("numberOfRestaurants", create.numberOfRestaurants);
    formData.append("numberOfRooms", create.numberOfRooms);
    // --------
    // formData.append("roomAmenities", create.numberOfRooms);


    dispatch(createHotelStep1(formData)).then((res)=>{
      if(res?.payload?.status){
        router.replace("/dashboard/my-hotels/add-new/"+res?.payload?.hotel?._id)
      }
      if(res?.error?.code === "ERR_BAD_REQUEST"){
        setPageError(true)
      }
    });


  };

  const handleInputChange = (e, field) => {
    setCreate({ ...create, [field]: e.target.value });
  };
  const handleInput = (e, field) => {
    setOther_information({...other_information, [field] : e.target.value });
  };
  
  const handleInputRoom = (e, field) => {
    setRoomAminitysArry({...roomAminitysArry, [field] : e.target.value });
  };
  
  const handleInputHotel = (e, field) => {
    setHotelFacilites({...hotelFacilites, [field] : e.target.value });
  };




  return (
    <div>
      <div style={{padding:"50px", borderRadius:"20px"}} className="bg-white ">

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
{/* -------------------- */}

<div className="my-flex-input flex gap-4 mb-3">
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
            Number of room
            </label>
            <div className="relative">
              <input
               onChange={(e) => handleInputChange(e, "numberOfRooms")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
            Restaurant
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInputChange(e, "numberOfRestaurants")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full ">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
          Outdoor swimming pool
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInputChange(e, "numberOfPools")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="w-full ">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
          Bars
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInputChange(e, "numberOfBars")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/*-------------------------  */}

      
       <label
            htmlFor=""
            className="form-label mb-2.5 block font-medium text-black dark:text-white">
            Room Amenities
          </label>
      <div  className="mb-5.5 mt-5 grid md:grid-cols-2  lg:grid-cols-3  items-start flex-wrap justify-start gap-4 aminity-group">
      {HotelData['amenities'].map((item,index)=>(
      <label key={index} htmlFor={`formCheckbox${index}`} className="flex cursor-pointer">
        <div className="relative pt-0.5">
          <input
          onChange={(e) => handleInputRoom(e, `roomAmenities${index + 1}`)}
          value={item?.value }
            type="checkbox"
            id={`formCheckbox${index}`}
            className="taskCheckbox sr-only"
          />
          <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
            <span className="text-white opacity-0">
              <svg
                className="fill-current"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                  fill=""
                />
              </svg>
            </span>
          </div>
        </div>
        <p>{item?.name}</p>
      </label>
          ))}
      </div>

      <label
            htmlFor=""
            className="form-label mb-2.5 block font-medium text-black dark:text-white">
            Hotel Facilities
          </label>
      <div  className="mb-5.5 mt-5 grid md:grid-cols-2  lg:grid-cols-3  items-start flex-wrap justify-start gap-4 aminity-group">
      {HotelData['facilities'].map((item,index)=>(
      <label key={index} htmlFor={`formCheckbox_facilities${index}`} className="flex cursor-pointer">
        <div className="relative pt-0.5">
          <input
            onChange={(e) => handleInputHotel(e, `hotelFacilites${index + 1}`)}
            value={item?.value }
            type="checkbox"
            id={`formCheckbox_facilities${index}`}
            className="taskCheckbox sr-only"
          />
          <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
            <span className="text-white opacity-0">
              <svg
                className="fill-current"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                  fill=""
                />
              </svg>
            </span>
          </div>
        </div>
        <p>{item?.name}</p>
      </label>
          ))}
      </div>
    
       

       {/* -------------------- */}

<div className="my-flex-input flex gap-4">
          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
            Other Information
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInput(e, "other_information1")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
            Other Information
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInput(e, "other_information2")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="w-full ">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
          Other Information
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInput(e, "other_information3")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="w-full ">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
          Other Information
            </label>
            <div className="relative">
              <input
              onChange={(e) => handleInput(e, "other_information4")}
                type="number"
                className="bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) mb-4 w-full rounded-lg border border-stroke py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/*-------------------------  */}


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
