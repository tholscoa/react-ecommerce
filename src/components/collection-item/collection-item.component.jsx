import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div class='collection-item'>
    <div className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
    </div>

    <div class='collection-footer' key={id}>
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>
    <CustomButton inverted>Add to cart</CustomButton>

  </div>
);
export default CollectionItem;