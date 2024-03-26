
"use client"
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import './index.css'
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetmyHotel } from "@/redux/AuthAction";

const MyHotels = () => {
const [myHotels,setMyHotels] =useState()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(GetmyHotel()).then((res)=>{
    console.log(res)
    setMyHotels(res?.payload?.data)
  })
},[])

  return (
    <DefaultLayout>
      <Breadcrumb  pageName ="My Hotels"/>
      <div className="HOtelCardWrraperr">
      <div className='my-botton d-flex justify-content-end w-100'>
      <Link href="/dashboard/my-hotels/add-new">
    <button type='button'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
      Add New Hotel</button>
      </Link>
    </div>
    {myHotels?.reverse().map((item,key)=>(
      <div key={key} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <Image width={100} height={100} style={{maxWidth:"100%", width:"100%"}} className="rounded-t-lg" src={`/images/cards/03a041d4-c974-4842-b5c6-cbabf672e437.png`} alt="" />
      </a>
      <div className="p-5">
          <Link href={"/my-hotels/add-new/"+item?._id}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.country}</p>
          <a href="#" className="EditBtn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit
               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
  </div>
    ))}


      </div>
    {/* <CreateHotel/> */}
    </DefaultLayout>
  );
};

export default MyHotels;
