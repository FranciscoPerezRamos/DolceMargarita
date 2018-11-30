import '../App.css';

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import HomeDM from './HomeDM.jsx';
import LoginDM from './LoginDM.jsx';
import LastView from './LastView.jsx';
import Facebook from './Facebook.jsx';


import MercadoP from './MercadoP.jsx';
import BuyProduct from './BuyProduct.jsx';
import CarritoView from './CarritoView';

export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
          <Switch>
                               
            <Route exact path="/carrito" component={CarritoView} />
            <Route exact path="/confirm" render={props => <LastView {...props} />} />
            <Route exact path="/login" render={props => <Facebook {...props} />} />
            <Route exact path="/product/:type" render={props => <BuyProduct {...props} />} /> 
            <Route exact path="/home" render={props => <HomeDM {...props} />} /> 
            <Route exact path="/" render={props => <LoginDM {...props} />} /> 
            <Route exact path="/m" render={props => <MercadoP {...props} />} /> 
          </Switch>
      </BrowserRouter>
    );
  }
}
