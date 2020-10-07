import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { PRODUCT_DETAILS } from '../constants/language';

import { getProductByID, getLanguageSpecific, formatPrice } from '../utils/index';

function ProductDetails() {
  const { id: productID } = useParams();

  const products = useSelector((state) => state.products.products);
  const language = useSelector((state) => state.language.language);
  const { contact } = PRODUCT_DETAILS[language];

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (products) setProductData(getProductByID(products, productID));
  }, [products, productID]);

  if (productData) {
    const { price, image } = productData;
    const { name, description } = getLanguageSpecific(productData, language);

    return (
      <Wrapper>
        <Product>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <span>{formatPrice(price, language)}</span>
            <p>{description}</p>
            <Contact to='/contact'>
              {contact}
            </Contact>
          </div>
        </Product>
      </Wrapper>
    );
  }
  else {
    return null;
  }
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  img {
    height: 300px;
    width: 300px;
    margin-right: 120px;
  }

  div {
    position: relative;
    width: 300px;

    span {
      display: block;
    }

    h3 {
      font-size: 2em;
      font-weight: bold;
    }

    span, h3 {
      margin-bottom: 20px;
    }
  }
`;

const Contact = styled(Link)`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: center;
  line-height: 1.2;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: dodgerblue;
`;

export default ProductDetails;
