import React from 'react';
import { useAppSelector } from './app/hooks';
import Product from './features/product/Product';
import Overlap from './Overlap';

function App() {
  const age = useAppSelector((state) => state.ui.age);

  if (!age) {
    return <Overlap />;
  }

  return <Product />;
}

export default App;
