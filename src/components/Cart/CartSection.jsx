/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CartSection = ({product,filterProducts,setFilterProducts}) => {
   const {_id,name,chef,photoUrl,price} = product;

   const handleCoffeeDelete = (id)=>{
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
    fetch(`http://localhost:5000/coffee/${id}`,{
      method:'DELETE'
    }
    )
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
        if(data.deletedCount > 0){
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        const filter = filterProducts.filter(pro=> pro._id !== id);
        console.log(filter);
        setFilterProducts(filter)
        }
    })
      }
    });
    

   }
   
    return (
        <div className="grid grid-cols-6 rounded-md items-center bg-[#F5F4F1] py-5 mx-14">
          <img className="col-span-2" src={photoUrl} alt="" />
          <div className='col-span-3'>
            <p className='text-2xl text-[#1B1A1A]'>
              Name: <span className='text-[#5C5B5B]'>{name}</span> 
            </p>
            <p className='text-2xl text-[#1B1A1A]'>
             Chef: <span  className='text-[#5C5B5B]'>{chef}</span> 
            </p>
            <p className='text-2xl text-[#1B1A1A]'>
             Price: <span  className='text-[#5C5B5B]'>{price || 980}Tk</span> 
            </p>
          </div>
          <div className="col-span-1">
            <Link to={`coffee/${_id}`}>
              <button  className=' py-2  px-2 rounded-md bg-[#D2B48C]'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.1025 9.53917C2.3425 5.81333 5.85667 3.125 10.0008 3.125C14.1425 3.125 17.655 5.81083 18.8967 9.53333C18.9967 9.835 18.9967 10.16 18.8967 10.4608C17.6575 14.1867 14.1425 16.875 9.99917 16.875C5.8575 16.875 2.34417 14.1892 1.10333 10.4667C1.00312 10.1656 1.00312 9.84021 1.10333 9.53917H1.1025ZM14.375 10C14.375 11.1603 13.9141 12.2731 13.0936 13.0936C12.2731 13.9141 11.1603 14.375 10 14.375C8.83968 14.375 7.72688 13.9141 6.90641 13.0936C6.08594 12.2731 5.625 11.1603 5.625 10C5.625 8.83968 6.08594 7.72688 6.90641 6.90641C7.72688 6.08594 8.83968 5.625 10 5.625C11.1603 5.625 12.2731 6.08594 13.0936 6.90641C13.9141 7.72688 14.375 8.83968 14.375 10Z"
                  fill="white"
                />
              </svg>
              </button>
            </Link><br />
            <Link to={`updateCoffee/${_id}`}>
            <button  className=' py-2  px-2 rounded-md bg-[#3C393B] my-5'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.1092 1.89082C17.6989 1.48066 17.1426 1.25024 16.5625 1.25024C15.9824 1.25024 15.4261 1.48066 15.0158 1.89082L14.0517 2.85499L17.145 5.94832L18.1092 4.98415C18.5193 4.57393 18.7497 4.01758 18.7497 3.43749C18.7497 2.85739 18.5193 2.30104 18.1092 1.89082ZM16.2608 6.83249L13.1675 3.73915L3.0425 13.8642C2.52821 14.3782 2.15015 15.0123 1.9425 15.7092L1.27583 17.9467C1.24365 18.0546 1.24124 18.1693 1.26888 18.2785C1.29652 18.3877 1.35318 18.4875 1.43284 18.5671C1.51251 18.6468 1.61224 18.7035 1.72146 18.7311C1.83069 18.7587 1.94536 18.7563 2.05333 18.7242L4.29083 18.0575C4.98769 17.8498 5.6218 17.4718 6.13583 16.9575L16.2608 6.83249Z"
                  fill="white"
                />
              </svg>
            </button>
            </Link>
            <br />
            <button onClick={()=>handleCoffeeDelete(_id)} className='py-2  px-2 rounded-md bg-[#EA4744]'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.33333 17.7778C3.33333 19.0056 4.32776 20 5.55557 20H14.4445C15.6722 20 16.6667 19.0056 16.6667 17.7778V4.44446H3.33333V17.7778Z"
                  fill="white"
                />
                <path
                  d="M13.8889 1.11109L12.7778 0H7.22224L6.11109 1.11109H2.22224V3.33333H17.7778V1.11109H13.8889Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
    );
};

export default CartSection;