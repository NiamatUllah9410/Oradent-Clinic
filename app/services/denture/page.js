import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import Denture from '@/component/Denture'
import React from 'react'

const page = () => {
  return (
    <>
    <Denture/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
