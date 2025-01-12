import { useCart } from "@/app/context/CartContext";
import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const CartSidebar = () => {
  const { cart } = useCart();

  return (
    <div className="w-full max-w-md h-screen bg-white shadow-lg rounded-lg">
      <div className="bg-black py-4 px-6 text-white rounded-t-lg">
        <h2 className="text-xl font-semibold">Cart Items</h2>
      </div>
      <div className="py-4 px-6 space-y-4 overflow-y-auto h-[410px]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your Cart is Empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <button
                className="text-gray-600 hover:text-red-600"
                aria-label={`Remove ${item.title} from cart`}
              >
                <IoTrashOutline className="w-6 h-6" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="bg-gray-100 py-4 px-6 flex justify-between items-center rounded-b-lg">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
