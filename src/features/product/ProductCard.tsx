import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  Product,
  useDeleteProductMutation,
  usePurchaseProductMutation,
} from './productsApi';
import {
  hideNotification,
  NotificationType,
  showNotification,
} from '../ui/uiSlice';
import ProductActionButton from '../../components/ProductActionButton';

function ProductCard({ product }: { product: Product }) {
  const isAdminMode = useAppSelector((state) => state.ui.isAdminMode);
  const dispatch = useAppDispatch();
  const [purchaseProduct, { isLoading: isLoadingPurchase }] =
    usePurchaseProductMutation();
  const [deleteProduct, { isLoading: isLoadingDelete }] =
    useDeleteProductMutation();

  const handlePurchase = () => {
    purchaseProduct(product.id)
      .unwrap()
      .then(() => {
        dispatch(
          showNotification({
            message: `Enjoy your "${product.name}"!`,
            type: NotificationType.SUCCESS,
          }),
        );
        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
      })
      .catch(({ data }) => {
        dispatch(
          showNotification({
            message: data.message,
            type: NotificationType.WARNING,
          }),
        );
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      });
  };

  const handleDelete = () => {
    deleteProduct(product.id)
      .unwrap()
      .then(() => {
        dispatch(
          showNotification({
            message: `Product "${product.name}" was removed`,
            type: NotificationType.SUCCESS,
          }),
        );
        setTimeout(() => {
          dispatch(hideNotification());
        }, 2000);
      });
  };

  return (
    <div className="card">
      <img
        className="card-image"
        src={product.image || 'https://via.placeholder.com/300x200'}
        alt=""
      />
      <div className="card-details">
        <h3 className="card-title">{product.name}</h3>
        <span className="card-info">
          <p className="card-info-price">{product.price / 100} €</p>
          <p className="card-info-quantity">{product.quantity} left</p>
        </span>
        {isAdminMode ? (
          <ProductActionButton
            isLoading={isLoadingDelete}
            disabled={isLoadingDelete}
            handleClick={handleDelete}
            title="Delete Product"
            className="danger"
          />
        ) : (
          <ProductActionButton
            isLoading={isLoadingPurchase}
            disabled={isLoadingPurchase || !product.quantity}
            handleClick={handlePurchase}
            title="Purchase"
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
