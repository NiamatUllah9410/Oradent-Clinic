import AppointmentSection from '@/component/AppointmentSection'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import Orthodontics from '@/component/Orthodontics'
import React from 'react'

const page = () => {
  return (
    <>
    <Orthodontics/>
    <AppointmentSection/>
    <CosmeticDentistry/>
    </>
  )
}

export default page
