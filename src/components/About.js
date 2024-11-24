import React from 'react'
import image from "../utils/about1.webp"
import image2 from "../utils/about2.webp"

function About() {
  return (
    <div className='about flex-col flex bg-white sm:flex-col md:flex-row lg:flex-row'>
      <div className='about-left w-full sm:w-full md:w-1/2 flex flex-col jutsify-center items-center space-y-6 '>
        <div className='about-text green-text'>ABOUT US</div>
        <div className='line'></div>
        <div className='about-desc-text blue-text space-y-4'>
            <div>We are a family-run business in American Fork, Utah that has found a new approach to the rental business. Our focus on pricing, product selection, and market research puts us above the rest.</div>
            <div>We firmly believe that our new approach to the rental world will change the way you look at planning parties, events, reunions, or trips. With our rock-bottom prices, it just makes sense to rent!</div>
            <div>We firmly believe that our new approach to the rental world will change the way you look at planning parties, events, reunions, or trips. With our rock-bottom prices, it just makes sense to rent!</div>
        </div>
      </div>
      <div className='about-right flex w-full sm:w-full md:w-1/2'>
        <img src={image} alt='about-image1' className='about-img-1 '/>
        <img src={image2} alt='about-image2' className='about-img-2 '/>
      </div>
    </div>
  )
}

export default About
