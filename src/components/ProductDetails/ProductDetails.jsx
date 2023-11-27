import { Link, useLoaderData } from "react-router-dom";
import bgImage from '../../assets/bg.png';


const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <section className={`py-[100px]`} style={{ backgroundImage: `url(${bgImage})` }}>

            <Link to="/">
            <div className="flex gap-2 items-center ml-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                className="font-bold "
              >
                <path
                  d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
                  stroke="#331A15"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[30px]">Back to Home</p>
            </div>
            </Link>
        <div className="w-[1120px] mx-auto bg-[#F4F3F0] py-[70px] ">
          
          <div className="flex gap-5 mx-32 justify-evenly  items-center">
             <img src={data.photoUrl} alt="" />
             <div className="">
                <p  className="text-3xl">Niceties</p>  
                <p  className="text-xl text-[#331A15]">Name: <span className="text-[#5C5B5B]">{data.name}</span></p>
                <p  className="text-xl text-[#331A15]"> Chef: <span className="text-[#5C5B5B]">{data.chef}</span>  </p>
                <p  className="text-xl text-[#331A15]"> Supplier: <span className="text-[#5C5B5B]"> {data.supplier}</span></p>
                <p  className="text-xl text-[#331A15]"> Taste: <span className="text-[#5C5B5B]">{data.taste}</span></p>
                <p  className="text-xl text-[#331A15]"> Category: <span className="text-[#5C5B5B]"> {data.category}</span></p>
                <p  className="text-xl text-[#331A15]"> Price: <span className="text-[#5C5B5B]"> {data.price}</span></p>
                <p  className="text-xl text-[#331A15]"> Details: <span className="text-[#5C5B5B]">{data.details}</span> </p>
             </div>   
          </div>
         
        </div>
      </section>
    );
};

export default ProductDetails;