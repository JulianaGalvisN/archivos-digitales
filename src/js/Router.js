import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import About from './About';
import Archivos from './Archivos';
import Marcos from './Marcos';
import Activismo from './Activismo';
import Metodologia from './Metodologia';
import Acerca_de from './Acerca_de';
import Navbar from './Navbar';
import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter basename="/archivos-digitales">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/archivos" component={Archivos} />
          <Route path="/marcos-de-referencia" component={Marcos} />
          <Route path="/activismo" component={Activismo} />
          <Route path="/metodologia" component={Metodologia} />
          <Route path="/acerca_de" component={Acerca_de} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
