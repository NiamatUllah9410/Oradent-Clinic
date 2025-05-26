import AppointmentSection from '@/component/AppointmentSection'
import GeneralDentistry from '@/component/GeneralDentistry'
import GeneralDentistryFeature from '@/component/GeneralDentistryFeature'
import React from 'react'

const page = () => {
  return (
    <>
    <GeneralDentistry/>
    <AppointmentSection/>
     <GeneralDentistryFeature/> 
    </>
  )
}

export default page
