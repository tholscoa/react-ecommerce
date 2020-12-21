import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div class='collection-preview'>
    <div class='title'>{title.toUpperCase()}</div>
    <div class='preview'>
      {
        items.filter((item, idx) => idx < 4).map(({id, ...otherCollectionItem}) =>
          <CollectionItem key={id} {...otherCollectionItem} />)
      }
    </div>
  </div>
);

export default CollectionPreview;