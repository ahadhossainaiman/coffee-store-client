/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import bgImage from '../assets/bg.png';
import Swal from 'sweetalert2';

const AddCoffee = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const createCoffee = {
      name:form.name.value,
      chef:form.chef.value,
      supplier:form.supplier.value,
      taste:form.taste.value,
      category:form.category.value,
      details:form.details.value,
      price:form.price.value,
      photoUrl:form.url.value
    }
    console.log(createCoffee);

    fetch(`http://localhost:5000/addcoffee`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(createCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.acknowledged){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee added Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        form.reset()
      }
    })


  }
  return (
    <section className={`py-[100px]`} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-[1320px] mx-auto bg-[#F4F3F0] py-[70px] ">
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
        <div className="flex flex-col justify-center items-center">
        
          <h1 className="text-[45px]">Add New Coffee</h1>
          <p className="text-justify w-[932px] mx-auto text-[18px]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 justify-center mt-[35px]">
            <div className="w-[536px]">
              <label htmlFor="">Name</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="text"
                name="name"
                placeholder="Enter  Coffee Name"
                required
              />
            </div>
            <div className="w-[536px]">
              <label htmlFor="">Chef</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="text"
                name="chef"
                placeholder="Enter  Coffee chef"
                required
              />
            </div>
          </div>

          <div className="flex gap-5 justify-center mt-[35px]">
            <div className="w-[536px]">
              <label htmlFor="">Supplier</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                required
              />
            </div>
            <div className="w-[536px]">
              <label htmlFor="">Taste</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="text"
                name="taste"
                placeholder="Enter  Coffee taste"
                required
              />
            </div>
          </div>

          <div className="flex gap-5 justify-center mt-[35px]">
            <div className="w-[536px]">
              <label htmlFor="">Category</label>
              <br />
              <input
                className=" w-full outline-none  text-xl p-1 rounded-md"
                type="text"
                name="category"
                placeholder="Enter  Coffee Category"
                required
              />
            </div>
            <div className="w-[536px]">
              <label htmlFor="">Details</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="text"
                name="details"
                placeholder="Enter  Coffee details"
                required
              />
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-[35px]">
            
          <div className="w-[536px]">
              <label htmlFor="">Price</label>
              <br />
              <input
                className=" w-full outline-none text-xl p-1 rounded-md"
                type="number"
                name="price"
                placeholder="Enter  Coffee Price"
                required
              />
            </div>
            <div className="w-[536px]">
              <label htmlFor="">Photo</label>
              <br />
              <input
                className=" w-full outline-none  text-xl p-1 rounded-md"
                type="text"
                name="url"
                placeholder="Enter Photo UR"
                required
              />
            </div>
            
          </div>
          <div className="w-[1100px] mx-auto mt-[35px]">
            <input
              type="submit"
              className=" w-full rounded-md  bg-[#D2B48C] border-2 border-[#331A15] p-2 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCoffee;
