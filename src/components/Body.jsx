import React from "react";

import CardList from "./CardList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/slice/appSlice";
import { ToastContainer, toast } from "react-toastify";

const Body = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.app.itemsInCart);
  return (
    <div className="flex flex-col h-full    items-center gap-6 w-full">
      <div className="flex  flex-col md:flex-row items-center justify-center  gap-2 mt-3 w-full">
        <h1 className="font-bold text-xl ">Men & Women Fashion</h1>
        {itemsInCart.length > 0 && (
          <button
            className="text-sm  bg-red-600 rounded-sm font-bold text-white px-2 p-1"
            onClick={() => {
              dispatch(clearCart());
              toast.info("Cart is Empty", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }}
          >
            Empty Cart
          </button>
        )}
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </div>
      <CardList />
    </div>
  );
};

export default Body;
