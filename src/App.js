import React from 'react';
import Home from './pages/home';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Projets from './pages/projets';
import Concours from './pages/concours';
import Communications from './pages/communication';
import Contact from './pages/contact';
import Mentions from './pages/mention';

/* import CSS */
import './css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projets' component={Projets} />
        <Route path='/concours' component={Concours} />
        <Route path='/communications' component={Communications} />
        <Route path='/contact' component={Contact} />
        <Route path='/mention' component={Mentions} />
      </Switch>
    </>
  );
}

export default App;
