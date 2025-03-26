import React from 'react'
import UserRegister from '@/Components/Common/UserRegister'
import Navbar from '@/Components/Landing Page/Navbar'
import FooterSection from '@/Components/Landing Page/FooterSection'
const page = () => {
  return (
    <div>
      <Navbar/>
      <UserRegister/>
      <FooterSection/>
    </div>
  )
}

export default page

