'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart } from '@/redux/productSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 rounded-lg border shadow-md">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain mb-4 w-full h-48"
              />
            </Link>
            <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
            <p className="mb-2 text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
