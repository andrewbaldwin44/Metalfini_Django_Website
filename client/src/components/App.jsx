import React from 'react';
import Routes from '../routes/Index';

import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      {Routes}
    </>
  )
}

export default App;
