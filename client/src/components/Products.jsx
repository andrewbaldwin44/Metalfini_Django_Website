import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getLanguageSpecific } from '../utils/index';

function Products() {
  const products = useSelector((state) => state.products.products);
  const language = useSelector((state) => state.language.language);

  return (
    <Wrapper>
      {products && products.map(product => {
        const { id, price, image } = product;
        const { name, description } = getLanguageSpecific(product, language);

        return (
          <Product key={`product${id}`} to={`/products/${id}`}>
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

const Product = styled(Link)`
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
