import { ChangeEvent, useRef, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import InputField from '../../components/InputField';
import ProductActionButton from '../../components/ProductActionButton';
import {
  hideNotification,
  NotificationType,
  showNotification,
} from '../ui/uiSlice';
import { useCreateProductMutation } from './productsApi';

function NewProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [ageRestriction, setAgeRestriction] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const [createProduct, { isLoading: isLoadingCreate }] =
    useCreateProductMutation();

  const cleanFormFields = () => {
    setProductName('');
    setProductPrice('');
    setProductQuantity('');
    setAgeRestriction('');
    setProductImage(null);

    if (imageRef.current) {
      imageRef.current.value = '';
    }
  };

  const formFieldsAreFilled = () => {
    return !!(
      productName.length &&
      productPrice.length &&
      productQuantity.length
    );
  };

  const handleCreate = () => {
    if (!formFieldsAreFilled()) {
      dispatch(
        showNotification({
          message: `Required form fields are empty!`,
          type: NotificationType.DANGER,
        }),
      );

      setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);

      return null;
    }

    let formData = new FormData();

    const productPriceInCents = Number(productPrice) * 100;

    formData.set('name', productName);
    formData.set('price', String(productPriceInCents));
    formData.set('quantity', productQuantity);
    formData.set('age_restriction', ageRestriction);

    if (productImage) {
      formData.set('image', productImage);
    }

    createProduct(formData)
      .unwrap()
      .then(() => {
        dispatch(
          showNotification({
            message: `Created new product - "${productName}" !`,
            type: NotificationType.SUCCESS,
          }),
        );

        cleanFormFields();

        setTimeout(() => {
          dispatch(hideNotification());
        }, 3000);
      })
      .catch(({ data }) => {
        dispatch(
          showNotification({
            message: "Couldn't create product...",
            type: NotificationType.WARNING,
          }),
        );
        setTimeout(() => {
          dispatch(hideNotification());
        }, 2000);
      });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    setProductImage(event.target.files[0] || null);
  };

  const removeImage = () => {
    setProductImage(null);

    if (imageRef.current) {
      imageRef.current.value = '';
    }
  };

  return (
    <div className="card">
      {productImage && (
        <>
          <img
            className="card-image"
            src={URL.createObjectURL(productImage)}
            alt=""
          />
          <button
            type="button"
            className="card-image-remove"
            aria-label="Close"
            onClick={removeImage}>
            <svg
              aria-hidden="true"
              className="card-image-remove-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </>
      )}
      <div className="card-details">
        <h4 className="card-title">Add new product</h4>

        <form className="product-form">
          <InputField
            label="Name"
            name="name"
            type="text"
            placeholder="Product name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />

          <div className="input-group">
            <label htmlFor="price" className="input-group-label">
              Price
            </label>
            <div className="input-group-price">
              <input
                type="number"
                id="price"
                name="price"
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="input-group-field"
                placeholder="0.00"
              />
              <div className="input-group-price-currency">
                <span>€</span>
              </div>
            </div>
          </div>

          <InputField
            label="Quantity"
            name="quantity"
            type="number"
            placeholder="Enter product quantity"
            onChange={(e) => setProductQuantity(e.target.value)}
            value={productQuantity}
          />

          <InputField
            label="Age restriciton"
            name="age_restriction"
            type="number"
            placeholder="Enter age restriction, e.g: 18"
            onChange={(e) => setAgeRestriction(e.target.value)}
            value={ageRestriction}
          />

          <div className="input-group">
            <label htmlFor="image" className="input-group-label">
              Image
            </label>

            <input
              type="file"
              name="small-file-input"
              id="small-file-input"
              multiple={false}
              onChange={handleImageChange}
              ref={imageRef}
              className="input-group-file"
            />
          </div>
        </form>

        <ProductActionButton
          isLoading={isLoadingCreate}
          handleClick={handleCreate}
          title="Save Product"
          className="success"
        />
      </div>
    </div>
  );
}

export default NewProduct;
