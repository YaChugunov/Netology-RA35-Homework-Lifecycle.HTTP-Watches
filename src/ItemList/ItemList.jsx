import React, { useState } from 'react';

import ItemSingle from '../ItemSingle/ItemSingle';

export default function ItemList(props) {
  const { records } = props;

  const handleRemove = (id) => {
    props.onRemove(id);
  };

  return (
    <div className="ItemRow">
      {records.map((obj) => (
        <ItemSingle
          title={obj.title}
          time={props.time}
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
