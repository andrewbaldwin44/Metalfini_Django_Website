import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Products() {
  const products = useSelector((state) => state.products.products);

  console.log(products)

  return (
    <Wrapper>
      {products && products.map(({ id, name, price, description, image }) => {
        return (
          <Product key={`product${id}`}>
            <img src={image} alt={name} />
            <div className='details'>
              <h3>{name}</h3>
              <p>{description}</p>
              <span>${price}</span>
            </div>
          </Product>
        )
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 280px;
  width: 250px;
  margin: 20px;
  padding: 20px;

  img {
    min-height: 200px;
    height: 200px;
    width: 100%;
  }

  .details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-self: flex-start;

    height: 100%;
    padding-top: 20px;
  }
`;

export default Products;
