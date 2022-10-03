import React from 'react';
import ProductCard from '../features/product/ProductCard';
import './card.css';
import { Product } from '../features/product/productsApi';
import { useAppSelector } from '../app/hooks';
import NewProduct from '../features/product/NewProduct';

function ProductList({ products }: { products: Product[] }) {
  const isAdminMode = useAppSelector((state) => state.ui.isAdminMode);

  return (
    <div className="card-wrapper">
      {isAdminMode && <NewProduct />}

      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
