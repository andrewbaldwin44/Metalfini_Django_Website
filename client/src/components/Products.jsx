import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getLanguageSpecific, formatPrice } from '../utils/index';

function Products() {
  const products = useSelector((state) => state.products.products);
  const language = useSelector((state) => state.language.language);

  return (
    <Wrapper>
      {products && products.map(product => {
        const { id, price, image } = product;
        const { name } = getLanguageSpecific(product, language);

        return (
          <Product key={`product${id}`} to={`/products/${id}`}>
            <img src={image} alt={name} />
            <div className='details'>
              <h3>{name}</h3>
              <span>{formatPrice(price, language)}</span>
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
    flex-direction: column;
    align-self: flex-start;
    line-height: 1.3;

    height: 100%;
    margin-left: 2px;
    padding-top: 20px;

    h3 {
      font-size: 1.1em;
    }
  }
`;

export default Products;
