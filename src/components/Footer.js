import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-inner flex justify-center items-center '>
        <div className='footer-1 blue-text space-y-2'>
            <div className='footer-header'>OUR STORE</div>
            <div>
                <div>896 S Auto Mall Dr</div>
                <div>American Fork, UT 84003</div>
                <div>801-319-5524</div>
                <div className='underline'>info@planitrentals.com</div>
            </div>
        </div>
        <div className='footer-1 green-text space-y-2'>
            <div className='footer-header'>HOURS</div>
            <div>
                <div>Mon - Fri: 9am - 5pm</div>
                <div>​​Saturday: 8am - Noon</div>
                <div> ​Sunday: Closed</div>
            </div>
        </div>
        <div className='footer-1 blue-text space-y-2'>
            <div className='footer-header'>HELPFUL LINKS</div>
            <div>
                <div className='underline'>Cancellation Policy</div>
                <div className='underline'>Bounce House FAQ</div>
                <div className='underline'>Order Online</div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
