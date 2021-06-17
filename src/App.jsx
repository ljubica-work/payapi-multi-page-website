import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ContactPage from './pages/ContactPage';
import About from './pages/About';

import './styles/index.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME}>
        <Home />
      </Route>
      <Route path={routes.ABOUT}>
        <About />
      </Route>
      <Route path={routes.PRICING}>
        <Pricing />
      </Route>
      <Route path={routes.CONTACT}>
        <ContactPage />
      </Route>
    </Switch>
  );
};

export default App;
