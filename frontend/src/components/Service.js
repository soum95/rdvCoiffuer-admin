import React from 'react';


export default ({ service: { name,description,price,_id }, onDelete  }) => {
  return (
    <div>
      <li>
      <h3 class="accordion-title">{ name }</h3>
      <p class="accordion-price">{ price }</p>
      <div class="accordion-content">
        <p>{ description }</p>
      </div>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
      Remove
    </button>
    </li>
    </div>
  );
};