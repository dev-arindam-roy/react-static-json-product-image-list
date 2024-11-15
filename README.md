# React Static Json Product Image List

> A simple react application with static json with image file

## Check the Application
[https://dev-arindam-roy.github.io/react-static-json-product-image-list/](https://dev-arindam-roy.github.io/react-static-json-product-image-list/)


```js
import React, { useEffect, useState } from 'react';
import productJson from './fruits.json';
import ProductItems from './ProductItems';

const StaticJsonProductList = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(productJson);
  }, []);
  return (
    <>
      <div
        style={{ width: '800px', margin: '60px auto', fontFamily: 'monospace' }}
      >
        <h3 style={{ textAlign: 'right' }}>
          <strong>Static JSON Product List - Dynamically Image Display ({productList.length})</strong>
        </h3>
        <hr />
        <div style={{ width: '100%' }}>
          {productList.length > 0 ? (
            productList.map((item, index) => {
              return (
                <ProductItems key={'productItem-' + index} sendItem={item} sendIndex={index} />
              );
            })
          ) : (
            <p>No Products Found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StaticJsonProductList;
```

```js
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
```