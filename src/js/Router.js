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
import SeccionIdentificar from './SeccionIdentificar';
import SeccionAnalizar from './SeccionAnalizar';
import SeccionUtilizar from './SeccionUtilizar';
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
          <Route exact path="/metodologia" component={Metodologia} />
          <Route path="/metodologia/identificar" component={SeccionIdentificar} />
          <Route path="/metodologia/analizar" component={SeccionAnalizar} />
          <Route path="/metodologia/utilizar" component={SeccionUtilizar} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
