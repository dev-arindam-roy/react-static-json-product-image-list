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
