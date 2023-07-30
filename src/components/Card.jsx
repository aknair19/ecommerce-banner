import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ product }) => {
  const { title, price, description, category, image } = product;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-[190px]  h-55 shadow-2xl shadow-gray-600/60 items-center rounded-md gap-4">
      <div className="w-full h-4/6 p-4 ">
        <img className="w-full h-full p-2  " src={image} alt={image} />
      </div>
      <div className="h-1/6 px-2 flex flex-col justify-between items-center">
        <div>
          <p className="text-sm font-bold text-clip overflow-hidden ... h-10 ">
            {title.toUpperCase()}
          </p>
          <p className="text-sm font-bold  ">
            <span className="text-red-600 font-semibold">Price</span> ${price}
          </p>
        </div>
        <div className="flex w-full justify-between px-1">
          <button
            onClick={() => {
              dispatch(addItems(product));
              toast.success("🦄 Added to cart", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,

                progress: undefined,
                theme: "colored",
              });
            }}
            className="text-sm font-bold  hover:bg-yellow-400 hover:rounded-md p-1 "
          >
            ADD TO CART
          </button>
          <ToastContainer position="bottom-center" hideProgressBar={false} />
          <button onClick={()=>{
            toast.info('🦄 Item removed from cart!', {
              position: "bottom-center",
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }}>
            <BsFillTrashFill className="text-md text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
