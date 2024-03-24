"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import IsLogin from '@/components/Layouts/IsLogin'
import React from 'react'

function page() {
  return (
    <IsLogin>
    <DefaultLayout>
<h1>faw</h1>
    </DefaultLayout>
    </IsLogin>
  )
}

export default page