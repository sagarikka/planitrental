import React from 'react'

function CategoryItems({name,thumbnail,price,batch}) {
  return (
    <div className='each-item'>
      {batch&&<div className='category-box'>{batch}</div>}
      <img src={thumbnail} alt='category-image'/>
      <div className='flex each-item-text pt-4 blue-text font-bold '>
        <div>{name} | {price}</div>
      </div>
    </div>
  )
}

export default CategoryItems
