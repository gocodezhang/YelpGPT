import React from 'react';

function Tags({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <small className="tags" key={category.alias}>{category.alias}</small>
      ))}
    </>
  );
}

export default Tags;
