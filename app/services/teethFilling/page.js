import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import TeethFilling from '@/component/TeethFilling'
import React from 'react'

const page = () => {
  return (
    <>
    <TeethFilling/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
