import React from 'react'
import image from "../utils/product-1.webp"
import { Link } from 'react-router-dom'

function Item({thumbnail,desc,name}) {
  return (
    <div className='item bg-white'>
      <img src={thumbnail} alt='item-image'/>
      <div className='item-button'>Browse All Items</div>
      <div className='item-text space-y-0.5'>
        <div><Link className='underline item-name green-text' to={`/planitrentals/${name}`}>{name}</Link></div>
        <div className='item-desc blue-text'>{desc}</div>
      </div>
    </div>
  )
}

export default Item
