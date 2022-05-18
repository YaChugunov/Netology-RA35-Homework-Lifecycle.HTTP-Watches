import React, { useState } from 'react';

import ItemSingle from '../ItemSingle/ItemSingle';

export default function ItemList(props) {
  const { records } = props;

  const handleRemove = (id) => {
    props.onRemove(id);
  };

  console.log(records);

  return (
    <div className="ItemRow">
      {records.map((obj) => (
        <ItemSingle
          title={obj.title}
          timezone={obj.timezone}
          record={obj}
          onRemove={() => handleRemove(obj.id)}
          id={obj.id}
          key={obj.id}
        />
      ))}
    </div>
  );
}
