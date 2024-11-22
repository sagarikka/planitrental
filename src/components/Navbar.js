import React, { useState } from 'react';
import logo from '../utils/blue-green-O.webp';
import { Link, useParams } from 'react-router-dom';
import { data } from '../utils/data';
function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const {category}=useParams();

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear existing timeout
    setShowDropdown(true); // Show dropdown immediately on hover
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setShowDropdown(false), 1000); // Hide after 1 second
    setTimeoutId(id);
  };

  return (
    <div className="navbar space-y-2">
      <div className="navbar-upper space-x-6">
        <img src={logo} alt="logo" />
        <div className="space-y-4">
          <div className="flex text-xl space-x-6 font-semibold menu">
            <div className="green-text">Home</div>
            <div>Location</div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              Rental
              {showDropdown && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg p-4 space-y-2 z-10 dropdown"
                  onMouseEnter={() => clearTimeout(timeoutId)} // Keep dropdown open on hover
                  onMouseLeave={handleMouseLeave} // Start timeout on mouse leave
                >
                  {
                    data.map((data)=>{
                      return data.category!=="All Items" && <div style={{color:data.category===category&& "#6FB745"}}><Link to={`/planitrentals/${data.category}`}>{data.category}</Link></div>
                    })
                  }
                </div>
              )}
            </div>
            <div>Package Deals</div>
            <div>Contacts</div>
            <div>Policies</div>
            <div>Blog</div>
          </div>
          <div className="flex justify-end blue-text font-semibold contact-no">
            Call Or Text Us!{' '}
            <Link className="underline">801-319-5524</Link>
          </div>
        </div>
      </div>
      <div className="navbar-lower space-y-0.5">
        <div className="blue-text order-text">
          ORDER ONLINE <Link className="red-text underline">HERE</Link>
        </div>
        <div className="green-text desc-text flex flex-col justify-center items-center">
          <span>
            You are browsing our{' '}
            <span className="red-text">American Fork, Utah </span>Location{' '}
          </span>
          <span>
            Click <Link className="blue-text underline">HERE</Link> to switch
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
