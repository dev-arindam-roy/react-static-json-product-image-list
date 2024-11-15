import React from 'react';

const ProductItems = ({ sendItem, sendIndex }) => {
  return (
    <>
      <div key={'product-' + sendIndex} style={{ paddingBottom: '10px' }}>
        <div style={{ float: 'left', width: '100px' }}>
          <img
            src={require(`./images/${sendItem.name.toLowerCase()}.png`)}
            alt={sendItem.name.toLowerCase()}
            style={{ width: '100%' }}
          />
        </div>
        <div
          style={{
            float: 'left',
            width: '650px',
            marginLeft: '15px',
          }}
        >
          <p>
            <strong>Name:</strong>{' '}
            <span style={{ fontSize: '16px' }}>{sendItem.name}</span>
          </p>
          <p>
            <strong>Details:</strong> {sendItem.details}
          </p>
          <p>
            <strong>Price:</strong>{' '}
            <span
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'green',
              }}
            >
              Rs.{parseFloat(sendItem.price).toFixed(2)}
            </span>
          </p>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </>
  );
};

export default ProductItems;
