import React from 'react';
import Routes from '../routes/Index';

import GlobalStyles from './GlobalStyles';
import Header from './Header/Index';

function App() {
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
