'use client';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/redux/productSlice';

export default function ProductDetails({ params }) {
  const { id } = params;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="mt-4 md:w-1/2 md:pl-8 md:mt-0">
          <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
          <p className="mb-4 text-xl font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
