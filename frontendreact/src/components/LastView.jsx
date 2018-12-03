import React from 'react';
import Ionicon from 'react-ionicons';
import '../dist/LastView.css';
import API from '../service/api.js';
import ProductoEnCarrito from './ProductoEnCarrito'

export default class LastView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      nombreCliente: "",
      apellidoCliente: "",
      emailCliente: "",
      dniCliente: null,
      telefonoCliente: null,
      precio: this.calcularPrecio(),
    };
  }

  finishSell() {
    API.post("/testMP", {
      "id": this.state.id,
      "title": "Pedido",
      "quantity": 1,
      "currencyId": "ARS",
      "unitePrice": this.state.precio,
      "email": this.state.emailCliente,
    }).then(response => window.location.assign(response))
    .catch(console.log("no se esta haciendo correctamente el post gg"));
    
    this.setState({id: this.state.id + 1});
  }

  calcularPrecio() {
    return this.props.carrito.map(product => product.precio).reduce(function(a, b){ return a + b; });
  }

  setNombre = (event) => {
    this.setState({nombreCliente: event.target.value})
  }

  setApellido = (event) => {
    this.setState({apellidoCliente: event.target.value})
  }

  setEmail = (event) => {
    this.setState({emailCliente: event.target.value})
  }

  setDni = (event) => {
    this.setState({dniCliente: event.target.value})
  }

  setTelefono = (event) => {
    this.setState({telefonoCliente: event.target.value})
  }

  mostrarProductos = () => {
    return (
      <div>
        <h4 align="center" className="titulo">Tu Pedido</h4>
        { 
          this.props.carrito.map((producto) =>
            <ProductoEnCarrito
              producto={producto}
            />
          ) 
        }
      </div>
    )
  }

  datosCliente = () => {
    return (
      <div className="form-cliente">
        <h4 align="center" className="titulo-cliente">Datos de cliente</h4>
        <div className="row">
          <div>
            <form className="form">
              <label>Nombre:</label>
              <input 
                className="input" 
                type="text" 
                name="nombre" 
                value={this.state.nombreCliente} 
                onChange={this.setNombre}
              />  
            </form>
          </div>
          <div>
            < form className="form" > 
              <label>E-mail:</label>
              <input 
                type="text" 
                className="input" 
                name="apellido" 
                value={this.state.emailCliente} 
                onChange={this.setEmail}
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div>
            <form className="form" > 
              <label>Apellido:</label>
              <input 
                type="text" 
                className="input" 
                name="apellido" 
                value={this.state.apellidoCliente} 
                onChange={this.setApellido}
              />
            </form>
          </div>
          <div>
            <form className="form" >
              <label>D.N.I  :</label>
              <input 
                type="number" 
                className="input" 
                name="dni" 
                value={this.state.dniCliente} 
                onChange={this.setDni} 
              />  
            </form>
          </div>
        </div>
        <div className="row">
          <form className="form" >
            <label>
              Telefono:
            </label>
            <input type="number" className="input" name="telefono" value={this.state.telefonoCliente} onChange={this.setTelefono} />
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.mostrarProductos() }
        { this.datosCliente() }
            
        <h4 align="center" className="titulo">Finalizar compra</h4>
        
        <div className="boton-aceptar">
          <button
            className= "btn-dm"
            type="button"
            onClick={() => this.finishSell()}
          >
            <Ionicon icon="ios-cart" fontSize="35px" />
            Aceptar
          </button>
        </div>
      </div>
    );
  }
}
