import React from 'react'
import Navbar from '../components/Navbar'
import Item from '../components/Item'
import { data } from '../utils/data'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home '>
       <div className='home-container'>
            <div className='home-navbar'>
              <Navbar/>
            </div>
            <div className='home-container-body'>
                <div className='home-text-upper'>
                <div className='home-container-body-text'>
                    <div className='green-text welcome'>welcome</div>
                    <div className='blue-text desc'>We are Utah's best source for rentals of any kind! We are located in American Fork, Utah and rent to customers from all
                    over Utah and those visiting our beautiful state for recreation and fun. Birthday parties, family reunions, company parties,
                    anniversaries, or any get together can be enhanced with one of our rentals. We have everything from photo booths to bounce houses,
                    sound systems, inflatable movie screens, shave ice machines, cotton candy machines, zorb soccer balls, lasertag and much more. Plan
                    amazing events with one of our many items like: dunk tanks, foam machines, cornhole, fog machines, soft serve machine, and much more
                    ! You can rent all that and more at Plan-it Rentals. Please take some time and browse through our website and let us know if you have
                    any questions about our rental services. We would be happy to answer them! Call or text us at 801-319-5524</div>
                </div>
                </div>
                <div className='products '>
                    {data.map((Data)=>{
                      return  <Item key={Data.id}
                              thumbnail={Data.thumbnail}
                              name={Data.category}
                              desc={Data.desc}
                        />
                    })}
                </div>
                <div className='home-about'>
                    <About/>
                </div>
                <div className='home-coontact'>
                    <Contact/>
                </div>
                <div className='home-footer'>
                    <Footer/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
