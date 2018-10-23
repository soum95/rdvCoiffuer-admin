import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ employee: { firstname,lastname,job,description,img, _id }, onDelete  }) => {
  return (
    <div style={ styles }>
      <h2>{ firstname}</h2>
      <h2>{ lastname }</h2>
      <h2>{ job }</h2>
      <div> <img src={img}/> </div>
      <p>{ description }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
      Remove
    </button>
    </div>
  );
};