import React from 'react'
import Navbar from '../components/Navbar';
import Footer  from '../components/Footer';
function Container({children}) {
  return (
       <div className='container'>
       <div className='container-navbar'>
              <Navbar/>
        </div>
        <div className='container-body'>
           
            {children}
            <div className='container-footer'>
                <Footer/>
            </div>
        </div>
        </div>

  )
}

export default Container
