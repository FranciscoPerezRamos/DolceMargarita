import '../App.css';

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import HomeDM from './HomeDM.jsx';
import LoginDM from './LoginDM.jsx';
import Tamanio from './Tamaño.jsx';
import LastView from './LastView.jsx';
import Tipo from './Tipo.jsx';
import Forma from './Forma.jsx';
import Facebook from './Facebook.jsx';


export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
          <Switch>
            <Route exact path="/confirm" component={LastView} />
            <Route exact path="/login" component={Facebook} />
            <Route exact path="/tipo" component={Tipo} />
            <Route exact path="/tamanio" component={Tamanio} />
            <Route exact path="/forma" component={Forma} />
            <Route exact path="/home" component={HomeDM} />
            <Route exact path="/" component={LoginDM} />
          </Switch>
      </BrowserRouter>
    );
  }
}
