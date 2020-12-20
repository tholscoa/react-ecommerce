import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div class='collection-preview'>
    <div class='title'>{title.toUpperCase()}</div>
    <div class='preview'>
      {
        items.filter((item, idx) => idx < 4).map(item =>
          <div key={item.id}>{item.name}</div>)
      }
    </div>
  </div>
);

export default CollectionPreview;