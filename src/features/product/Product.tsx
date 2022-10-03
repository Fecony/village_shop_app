import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';
import {
  hideNotification,
  NotificationType,
  showNotification,
} from '../ui/uiSlice';
import { useGetProductsQuery } from './productsApi';

function Product() {
  const dispatch = useAppDispatch();
  const age = useAppSelector((state) => state.ui.age) as number;
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
  } = useGetProductsQuery(age);

  useEffect(() => {
    dispatch(
      showNotification({
        message: 'Loading products...',
        type: NotificationType.WARNING,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess || isError) {
      dispatch(hideNotification());
    }
  }, [dispatch, isSuccess, isError]);

  return (
    <section className="shop-wrapper">
      {isLoading && <Loading className="global" />}

      {products && <ProductList products={products} />}

      {products.length === 0 && !isLoading && (
        <h2 className="heading">
          Sorry shop is closed for now, see ya next time! <span>🎃</span>
        </h2>
      )}
    </section>
  );
}

export default Product;
