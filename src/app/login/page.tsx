import React from 'react'
import UserLogin from '@/Components/Common/UserLogin'
import Navbar from '@/Components/Landing Page/Navbar'
import FooterSection from '@/Components/Landing Page/FooterSection'
const page = () => {
  return (
    <>
    <Navbar/>
      <UserLogin/>
      <FooterSection/>
    </>
  )
}

export default page
