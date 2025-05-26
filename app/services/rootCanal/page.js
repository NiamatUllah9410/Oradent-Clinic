import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import RootCanal from '@/component/RootCanal'
import React from 'react'

const page = () => {
  return (
    <>
    <RootCanal/>
    <AppointmentSection/>
      <CosmeticDentistry/>
    </>
  )
}

export default page
