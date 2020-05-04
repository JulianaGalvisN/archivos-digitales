import 'normalize.css/normalize.css';
import '../css/global.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import Archivos from './Archivos';
import Marcos from './Marcos';
import Activismo from './Activismo';
import Metodologia from './Metodologia';
import Navbar from './Navbar';
import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/archivos" component={Archivos} />
          <Route path="/marcos-de-referencia" component={Marcos} />
          <Route path="/activismo" component={Activismo} />
          <Route path="/metodologia" component={Metodologia} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
