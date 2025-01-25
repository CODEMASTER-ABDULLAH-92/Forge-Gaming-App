import React from 'react'
import Hero from '../Component/Hero'
import Popular from '../Component/Popular'
import ThreeD from '../Component/ThreeD'
import LongHair from '../Component/LongHair'
import ReturnPolicy from '../Component/ReturnPolicy'
import TestimonialCarousel from '../Component/Testomonial'
import NewsLetter from '../Component/NewsLetter'
import Snack from '../Component/Snack'
const Home = () => {
  return (
    <div>
<Hero/>
<Popular/>
<ThreeD/>
<Snack/>
<LongHair/>
<ReturnPolicy/>
<TestimonialCarousel/>
<NewsLetter/>
    </div>
  )
}

export default Home
