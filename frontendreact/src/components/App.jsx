import '../App.css';

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import HomeDM from './HomeDM.jsx';
import LoginDM from './LoginDM.jsx';
import LastView from './LastView.jsx';
import Facebook from './Facebook.jsx';



import BuyBombones from './BuyBombones.jsx';
import BuyFiguras from './BuyFiguras.jsx';
import BuyHuevos from './BuyHuevos.jsx';
import CarritoView from './CarritoView';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carrito: [],
      precio: null,
    }
  }

  setCarrito = (carrito) => {
    let c = this.state.carrito
    c.push(carrito);
  }

  setPrecio = (precio) => {
   this.setState({precio})
  }

  render() {
    return (
      
      <BrowserRouter>
          <Switch>                  
            <Route exact path="/carrito" render={props => <CarritoView carrito={this.state.carrito} {...props} />} />  
            <Route exact path="/confirm" render={props => <LastView carrito={this.state.carrito} {...props} />} />
            <Route exact path="/login" render={props => <Facebook {...props} />} />
            <Route exact path="/product/bombones" render={props => <BuyBombones setCarrito={this.setCarrito} precio={this.state.precio} {...props} />} /> 
            <Route exact path="/product/figuras" render={props => <BuyFiguras setCarrito={this.setCarrito} precio={this.state.precio} {...props} />} /> 
            <Route exact path="/product/huevos" render={props => <BuyHuevos setCarrito={this.setCarrito} precio={this.state.precio} {...props} />} /> 
            <Route exact path="/home" render={props => <HomeDM setPrecio={this.setPrecio} {...props} />} /> 
            <Route exact path="/" render={props => <LoginDM {...props} />} /> 
          </Switch>
      </BrowserRouter>
    );
  }
}
