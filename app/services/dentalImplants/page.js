import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import DentalImplants from '@/component/DentalImplants'
import React from 'react'

const page = () => {
  return (
    <>
    <DentalImplants/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
