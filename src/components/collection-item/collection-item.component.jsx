import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div class='collection-item'>
    <div className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
    </div>

    <div  class='collection-footer' key={id}>
      <div className="name">{name}</div>
      <div className="price">${price}</div>
    </div>

  </div>
);
export default CollectionItem;