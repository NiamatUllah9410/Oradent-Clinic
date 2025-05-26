import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import TeethWhitening from '@/component/TeethWhitening'
import React from 'react'

const page = () => {
  return (
    <>
    <TeethWhitening/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
