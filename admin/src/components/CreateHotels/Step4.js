import React from 'react'

function Step4() {
  return (
    <div>
        
{/* ---------------------------form_page-4---------------------------------------------------------------------- */}
        
   <form>
    <div className='contact-heading'>
      <h2>HOME PAGE ADDON</h2>
    </div>
   <div className=' my-flex-input'>
   <div className='w-full'>
   <label className="mb-2.5 block font-medium text-black dark:text-white">
   Add Hotel to The Home Page Latest News?
  </label>
  <div className="relative">
    <input
      type="text"
      placeholder=""
      className="w-full rounded-lg border border-stroke bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-4"
    />
    </div>
   </div>

   <div className='w-full'>
   <label className="mb-2.5 block font-medium text-black dark:text-white">
   Add Hotel to The Home Page Hotel Latest News?
  </label>
  <div className="relative">
    <input
      type="text"
      placeholder=""
      className="w-full rounded-lg border border-stroke bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-4"
    />
    </div>
   </div>

   <div className='w-full'>
   <label className="mb-2.5 block font-medium text-black dark:text-white">
   Add Special offer to The Home Page?
  </label>
  <div className="relative">
    <input
      type="text"
      placeholder=""
      className="w-full rounded-lg border border-stroke bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-4"
    />
    </div>
   </div>
   <div className='w-full'>
   <label className="mb-2.5 block font-medium text-black dark:text-white">
   Add Hotel to The Home Page Spotlight?
  </label>
  <div className="relative">
    <input
      type="text"
      placeholder=""
      className="w-full rounded-lg border border-stroke bg-bg-rgb(241 245 249 / var(--tw-bg-opacity)) py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-4"
    />
    </div>
   </div>

   <div className='my-botton my-flex-botton mt-3'>
    <button type='button'><i class="bi bi-arrow-left"></i> Previus</button>
    <button type='button'>Next</button>
    </div>


   </div>
   </form>
    </div>
  )
}

export default Step4