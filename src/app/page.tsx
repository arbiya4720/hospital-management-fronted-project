import AwardSection from "@/Components/Landing Page/AwardSection"
import Booking from "@/Components/Landing Page/Booking"
import Carousel from "@/Components/Landing Page/Carousel"
import Cout from "@/Components/Landing Page/Cout"
import FeedbackCarousel from "@/Components/Landing Page/FeedbackCarousel"
import FooterSection from "@/Components/Landing Page/FooterSection"
import Navbar from "@/Components/Landing Page/Navbar"
import Partners from "@/Components/Landing Page/Partners"
import PersonalCare from "@/Components/Landing Page/PersonalCare"
import Services from "@/Components/Landing Page/Services"

export default function Home() {
  return(
    <>
    <div className="container-fluid ">
    <Navbar/>
    <Carousel/>
    <PersonalCare/>
    <Cout/>
    <AwardSection/>
    <Services/>
    <Booking/>
    <FeedbackCarousel/>
    <Partners/>
    <FooterSection/>
    </div>
    </>
  )
}
