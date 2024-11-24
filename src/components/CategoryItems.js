import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItems({name,thumbnail,price,batch}) {
  return (
    <Link to={`/planitrentals/product-page/${name}`}>
    <div className='each-item'>
      {batch&&<div className='category-box'>{batch}</div>}
      <img src={thumbnail} alt='category-image'/>
      <div className='flex each-item-text pt-4 blue-text font-bold '>
        <div>{name} | {price}</div>
      </div>
    </div>
    </Link>
  )
}

export default CategoryItems
