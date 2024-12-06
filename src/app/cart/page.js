'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/redux/productSlice';
import Image from 'next/image';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 mb-4 rounded border"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
