import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ConfigurationPage from './pages/ConfigurationPage';
import PreGamePage from './pages/PreGamePage';
import GamePage from './pages/GamePage';

export default function Routes() {
   return (
      <BrowserRouter>
         <Route exact path="/" component={LandingPage} />
         <Route path="/configuration" component={ConfigurationPage} />
         <Route path="/pregame" component={PreGamePage} />
         <Route path="/game" component={GamePage} />
      </BrowserRouter>
   );
}