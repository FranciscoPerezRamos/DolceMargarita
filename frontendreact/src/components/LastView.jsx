import React from 'react';
import Ionicon from 'react-ionicons';
import '../dist/LastView.css';
import CreditCardInput from 'react-credit-card-input';
import ProductoEnCarrito from './ProductoEnCarrito'

export default class LastView extends React.Component {
  carrito = []
  constructor(props) {
    super(props)

    this.state = {
      nombreCliente: "",
      apellidoCliente: "",
      emailCliente: "",
      dniCliente: null,
      telefonoCliente: null,
    };
  }

  finishSell() {
    return (
      <div>
        <h2>Su pedido se encuentra siendo procesado.
                Muchas Gracias por elegirnos
        </h2>
      </div>
    );
  }

  setNombre = (nombre) => {
    this.setState({nombreCliente: nombre})
  }

  setNombre(apellido) {
    this.setState({apellidoCliente: apellido})
  }

  setEmail(email) {
    this.setState({emailCliente: email})
  }

  setDni(dni) {
    this.setState({dniCliente: dni})
  }

  setTelefono(telefono) {
    this.setState({telefonoCliente: telefono})
  }

  mostrarProductos = () => {
    return (
      <div>
        <h4 align="center" className="titulo">Tu Pedido</h4>
        { 
          this.carrito.map((producto) =>
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
