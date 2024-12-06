'use client';
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <header className="p-4 text-white bg-gray-800">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/cart" className="hover:text-gray-300">
                Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
