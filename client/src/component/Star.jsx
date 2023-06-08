import React from 'react';

function Star({ rating }) {
  return (
    <div id="star">
      <div className="filled-star" style={{ width: `${(rating / 5) * 100}%`, overflow: 'hidden' }}>
        {[1, 2, 3, 4, 5].map((element) => (
          <i key={element} className="fa-solid fa-star"></i>))}
      </div>
      <div className="empty-star">
        {[1, 2, 3, 4, 5].map((element) => (
          <i key={element} className="fa-solid fa-star"></i>))}
      </div>
    </div>
  );
}

export default Star;
