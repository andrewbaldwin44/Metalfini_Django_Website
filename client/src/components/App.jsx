import React, { useEffect } from 'react';
import Routes from '../routes/Index';

import { useDispatch } from 'react-redux';
import { requestProducts } from '../actions';

import GlobalStyles from './GlobalStyles';
import Header from './Header/Index';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Header />
      </Routes>
    </>
  )
}

export default App;
