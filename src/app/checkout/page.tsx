"use client";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ButtonDark from "../components/Buttons/ButtonDark";
import { IoTrashOutline } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const { cart } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const deliveryCharge = 5; 

  // Calculate subtotal by summing up prices of items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Function to apply discount based on discount code
  const applyDiscount = () => {
    if (discountCode === "FLAT50") { 
      setDiscount(50);
    } else {
      alert("Invalid discount code!");
    }
  };

  // Calculate grand total including delivery charge and after applying discount
  const calculateGrandTotal = () => {
    return calculateSubtotal() - discount + deliveryCharge;
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 px-20 py-14">
      {/* Left Section: Cart Details */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <table className="w-full border-collapse" cellPadding="20px">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Products</th>
              <th className="py-2">Price</th>
              <th className="py-2">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Show skeleton loader if cart is empty */}
            {cart.length <= 0 ? (
              [...Array(3)].map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                  </td>
                  <td className="py-4">
                    <Skeleton className="h-4 w-16 rounded-md" />
                  </td>
                  <td className="py-4">
                    <Skeleton className="h-4 w-16 rounded-md" />
                  </td>
                  <td className="py-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </td>
                </tr>
              ))
            ) : (
              cart.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">
                        Brand: {item.brand}
                      </p>
                    </div>
                  </td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4">
                    <button className="text-red-500">
                      <IoTrashOutline className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Right Section: Summary and Discount */}
      <div className="w-full md:w-1/3 border p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between mb-4">
          <p>Subtotal</p>
          <p>${calculateSubtotal().toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Discount</p>
          <p>-${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Delivery Charge</p>
          <p>${deliveryCharge.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <p>Grand Total</p>
          <p>${calculateGrandTotal().toFixed(2)}</p>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Enter Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <button
            onClick={applyDiscount}
            className="ml-2 px-4 py-2 bg-black text-white rounded-md"
          >
            Apply
          </button>
        </div>
        <ButtonDark link="/checkout" title="Proceed to Checkout" />
      </div>
    </div>
  );
};

export default Page;