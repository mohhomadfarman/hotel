import React from 'react'
import '../index.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import CreateHotel from '../../../../components/CreateHotels/CreateHotel'
function AddHotel() {
  return (
    <DefaultLayout> 
     <Breadcrumb pageName="Add New Hotel" />
    <div className='form-wrraper Steps mt-0'>
        <CreateHotel/>
    </div>
    </DefaultLayout>
  )
}

export default AddHotel