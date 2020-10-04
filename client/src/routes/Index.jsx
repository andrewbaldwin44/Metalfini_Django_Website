import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../components/Home';
import FourOhFour from '../components/FourOhFour';

function Routes({ children }) {
  return (
    <Router>
      {children}
      <Main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/*' exact component={FourOhFour} />
        </Switch>
      </Main>
    </Router>
  )
}

const Main = styled.div`
  padding: 20px 30px;
`;

export default Routes;
