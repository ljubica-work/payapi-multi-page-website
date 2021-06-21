import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Paragraph from '../Paragraph';
import Button from '../Button';

import './OfferColumn.scss';

const OfferColumn = ({ plan, className }) => {
  const { products, title, text, price } = plan;
  const columnClasses = cx('offer-column', className);

  const renderItems = () => {
    return products.map((product) => {
      const classes = cx({
        'offer-column__list-item': true,
        'offer-column__list-item--checked': product.checked,
      });

      return (
        <li className={classes} key={product.name}>
          {product.name}
        </li>
      );
    });
  };

  return (
    <div className={columnClasses}>
      <div className='offer-column__title-wrapper'>
        <h2 className='offer-column__title'>{title}</h2>
        <Paragraph
          className='offer-column__paragraph'
          text={text}
          alignment='left'
        />
      </div>
      <div className='offer-column__content-wrapper'>
        <h2 className='offer-column__price'>{price}</h2>
        <div className='offer-column__divider'></div>
        <ul className='offer-column__list'>{renderItems()}</ul>
        <div className='offer-column__divider'></div>
        <Button
          text='Request Access'
          className='offer-column__button'
          type='dark'
        />
      </div>
    </div>
  );
};

OfferColumn.propTypes = {
  className: PropTypes.string,
  plan: PropTypes.shape({
    products: PropTypes.array,
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default OfferColumn;
