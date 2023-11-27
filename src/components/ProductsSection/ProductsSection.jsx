/* eslint-disable react/prop-types */
import p1 from '../../assets/coffee/p1.png';
import imgBg from '../../assets/coffee/4.2.png'
import imgBg1 from '../../assets/coffee/5.1.png';
import { useState } from 'react';
import CartSection from '../Cart/CartSection';
import { Link } from 'react-router-dom';
const ProductsSection = ({data}) => {
  
    const [filterProducts,setFilterProducts] = useState(data)
   

  return (
    <section className='my-10 bg-no-repeat  bg-[position:left_top,_right_center] '   style={{ backgroundImage: `url(${imgBg}),url(${imgBg1})` }}>
        <div className='w-full h-full' ></div>
      <span className='flex justify-center'>--- Sip & Savor ---</span>
      <h1 className="text-4xl my-4 flex justify-center text-[#331A15]">Our Popular Products</h1>
      <button className="mx-auto flex gap-2 py-3 mb-11 px-3 rounded-md border-2 text-white items-center border-[#331A15] bg-[#E3B577]">
       <Link to='/addCoffee'><span className='text-2xl'>Add Coffee</span> </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
        >
          <path
            d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z"
            fill="#331A15"
          />
        </svg>
      </button>
      <div className="grid grid-cols-2 gap-3 mx-20">
        {
         filterProducts?.map((product,index)=>{
                return <CartSection key={index} product={product} filterProducts={filterProducts} setFilterProducts={setFilterProducts} />
            })
        }
        
      </div>
    </section>
  );
};

export default ProductsSection;
