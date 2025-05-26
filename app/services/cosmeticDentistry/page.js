import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import CosmeticDentistrySection from '@/component/CosmeticDentistrySection'
import React from 'react'

const page = () => {
  return (
    <>
    <CosmeticDentistrySection/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
