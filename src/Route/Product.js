import React from 'react';
import logo from "../utils/blue-green-O.webp";
import { Link, useParams } from 'react-router-dom';
import product1 from "../utils/bounce1.webp";
import product2 from "../utils/bounce3.webp";
import { useState } from 'react';
import { categorydata } from '../utils/categorydata';

function Product() {
    const {product} =useParams();
    const [activeIndex, setActiveIndex] = useState(0);
    const [bigImageSrc, setBigImageSrc] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0); 

    const data=categorydata.filter((data)=>data.name===product)
    console.log(data);
  const slideData = [
    {
      title: "How To Reserve",
      content:
        "To make a reservation, use our online ordering site HERE. You may also call us at 801-319-5524 and push option 2 to speak to one of our customer service agents (during business hours).",
    },
    {
      title: "General Info",
      content: "This section contains general information.",
    },
    {
      title: "Popular Add-ons",
      content: "This section contains popular add-ons.",
    },
    {
      title: "Instructional Videos",
      content: "This section contains instructional videos.",
    },
    {
      title: "Cancellation Policy",
      content: "This section contains the cancellation policy.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSmallImageClick = (src) => {
    setBigImageSrc(src);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3); // Loop through the 3 images
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3); // Loop through the 3 images
  };

  return (
    <div className='product-container'>
       <div className='product-header'>
           <img src={logo} alt="logo"/>
           <div><Link to="/planitrentals" className='blue-text'>Home</Link></div>
       </div>
       <div className='product-body'>
         <div className='product-detail blue-text space-y-2'>
            <div>Home / {data[0].Category} / <span className='name-price'>{data[0].name} | {data[0].price}</span></div>
            <div className='pagination'>
                <button className='prev'>
                    <span>&lt; </span>prev 
                </button>
                <span className='separator'> | </span>
                <button className='next'>
                    Next <span >&gt;</span>
                </button>
            </div>
         </div>
         <div className='product-view'>
            <div className='product-left space-y-6 '>
                <img src={bigImageSrc || data[0].thumbnail} alt='product' className='big-image w-full' onClick={openModal}/>
                <div className='small-image'>
                    <img src={data[0].thumbnail} alt='product' className={bigImageSrc===data[0].thumbnail&&"image-border"} width={90} onClick={() => handleSmallImageClick(data[0].thumbnail)}/>
                    <img src={product1} alt='product' width={90} className={bigImageSrc===product1&&"image-border"} onClick={() => handleSmallImageClick(product1)}/>
                    <img src={product2} alt='product' width={90} className={bigImageSrc===product2&&"image-border"} onClick={() => handleSmallImageClick(product2)}/>
                </div>
                <div className='blue-text product-desc '>{data[0].price}*  - Perfect for those little tots, at a price you can't beat!  Grab this bouncer to give your little one(s) a day of fun.  This bounce house is good for 3-5 kids, 5 and under.  7ftx10ftx7ft</div>
                <div className='blue-text underline product-desc'>*Holiday pricing and details</div>
            </div>
            <div className='product-right space-y-24'>
                <div className='right-header font-bold blue-text text-xl'>{data[0].name} | {data[0].price}</div>
                <div className="faq-container">
                    {slideData.map((item, index) => (
                      <div key={index} className="faq-item">
                        <div
                          className="slide-title"
                          onClick={() => toggleAccordion(index)}
                        >
                          <span className='green-text product-title '>{item.title}</span>
                          <span className="toggle-icon green-text">
                            {activeIndex === index ? "−" : "+"}
                          </span>
                        </div>
                        {activeIndex === index && (
                          <div className="slide-content blue-text">{item.content}</div>
                        )}
                        <div className='slide-line'></div>
                      </div>
                    ))}
                </div>
            </div>
         </div>
       </div>
         {/* Modal for Image Slider */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>×</span>
            <div className="slider">
              <button className="prev-slide" onClick={goToPrevSlide}>←</button>
              <img
                src={currentSlide === 0 ? data[0].thumbnail : currentSlide === 1 ? product1 : product2}
                alt="slider"
                className="slider-image"
              />
              <button className="next-slide" onClick={goToNextSlide}>→</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
