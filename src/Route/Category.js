import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import CategoryItems from '../components/CategoryItems';
import Footer from '../components/Footer';
import { categorydata } from '../utils/categorydata';
import { data } from 'autoprefixer';
function Category() {
    const {category}=useParams();
    const Data=categorydata.filter(data=>data.Category===category);
  return (
    <div className='category'>
       <div className='home-navbar'>
              <Navbar/>
        </div>
        <div className='category-container-body'>
            <div className='category-heading space-y-4 py-4'>
                {category==="Bounce Houses"&& 
                   <div className='bounce-house space-y-4'>
                        <div className='blue-text bounce-heading'>A NEW Approach To The Bounce House Industry</div>
                        <div className='bounce-text blue-text'>We believe the bounce house industry is not practical for a kids backyard party. Beyond the prices being incredibly expensive, you have 2-4 guys coming into your yard to deliver a massively heavy unit for just a couple hours of use.  So we built our whole business around a new, more cost effective solution!  All of our inflatables are custom built for our company.  We have unique designs that no other company has, and they are built to be incredibly durable and lightweight for easy transportation!  Come pickup a unit in the morning (loaded by our staff) and return the next morning (unloaded by our staff).  Setup is a breeze, and we include everything you need with an instructional video.  Come see how we've become Utah's top rental company with thousands and thousands of rentals under our belt!</div>
                        <div className='bounce-box blue-text'>
                            <ul className='bounce-list blue-text'>
                                <li>The Best Prices You'll Find</li>
                                <li>Lightweight & Easy To Setup</li>
                                <li>All Day Rentals (Saturday renters get Sunday for free!)</li>
                                <li>Super Fast Pickup & Dropoff (in and out in under 5 mins, usually less!)</li>
                                <li>Setup on your schedule without the worry of late arrivals and long installs</li>
                                <li>No intrusive setups with strangers in your yard</li>
                                <li>Custom & Unique Designs only our company has!</li>
                            </ul>
                            <img src='' alt='star'/>
                        </div>
                        <div className='underline blue-text text-2xl font-semibold'><Link> Bounce House FAQ</Link></div>
                    </div>
                }
                <div className='blue-text category-heading'>{category}</div>
                <div className='red-text underline text-2xl font-bold'>2024 Holiday Pricing & Details</div>
                <div className='line category-line'></div>
            </div>
            
            <div className='category-products space-x-5'>
                {/* <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/>
                <CategoryItems/> */}
                {
                    Data.map((data)=>{
                        return <CategoryItems
                                key={data.id}
                                name={data.name}
                                thumbnail={data.thumbnail}
                                price={data.price}
                                batch={data.batch}
                            />
                    })
                }
            </div>
            <div className='home-footer'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Category
