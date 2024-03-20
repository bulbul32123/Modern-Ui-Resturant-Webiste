import React from 'react'
import Navbar from './components/header/Navbar'
import Hero from './section/hero/Hero'
import CustomerFavorites from './section/customerFavorites/CustomerFavorites'
import SpecialDishesSection from './section/specialDishes/SpecialDishesSection'
import Testimonials from './section/testimonials/Testimonials'
import StorySection from './section/story/StorySection'
import Footer from './components/footer/Footer'
import SectionWapper from './components/SectionWapper'

export default function App() {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <SectionWapper>
        <Navbar />
        <Hero />
        <CustomerFavorites />
        <SpecialDishesSection />
        <Testimonials />
        <StorySection />
        <Footer />
      </SectionWapper>
    </main >
  )
}
