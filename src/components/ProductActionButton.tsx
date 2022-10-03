import React, { MouseEventHandler } from 'react';
import Loading from './Loading';

function ProductActionButton({
  isLoading = false,
  handleClick = () => {},
  title = '',
  className = '',
  disabled = false,
}: {
  isLoading?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  className?: string;
  disabled?: boolean;
}) {
  const classNames = ['card-button', className || 'default'].join(' ');

  return (
    <button className={classNames} disabled={disabled} onClick={handleClick}>
      {isLoading ? <Loading className="button" /> : <span>{title}</span>}
    </button>
  );
}

export default ProductActionButton;
