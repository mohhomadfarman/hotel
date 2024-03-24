import React from 'react'
import CreateHotel from '../../../components/CreateHotels/CreateHotel'
import '../index.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
function AddHotel() {
  return (
    <DefaultLayout> 
     <Breadcrumb pageName="Add New Hotel" />
    <div className='form-wrraper Steps'>
        <CreateHotel/>
    </div>
    </DefaultLayout>
  )
}

export default AddHotel