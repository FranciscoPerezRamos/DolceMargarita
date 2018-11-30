import React from 'react';
import Ionicon from 'react-ionicons';
import '../dist/LoginDm.css';
import CreditCardInput from 'react-credit-card-input';

export default class LastView extends React.Component {

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

  render() {
    return (
      <div>
        <h4 align="center" className="colorWhite titleFinsh">Datos de cliente</h4>
        <form>
          <label>
            Nombre:
          </label>
          <input type="text" name="nombre" value={this.state.nombreCliente} onChange={this.setNombre}/>  
        </form>

        < form>
          <label>
            Apellido:
          </label>
          <input type="text" name="apellido" value={this.state.apellidoCliente} onChange={this.setApellido}/>
        </form>
        
        <form>
          <label>
            E-Mail :
          </label>
          <input type="text" name="email" value={this.state.emailCliente} onChange={this.setEmail} />
        </form>

        <form>
          <label>
            D.N.I  :
          </label>
          <input type="number" name="dni" value={this.state.dniCliente} onChange={this.setDni} />  
        </form>

        <form>
          <label>
            Telefono:
          </label>
          <input type="number" name="telefono" value={this.state.telefonoCliente} onChange={this.setTelefono} />
        </form>
        
        <h4 align="center" className="colorWhite titleFinsh">Cantidad de productos</h4>
        <form>
          <label>
            Cantidad:
          </label>
          <input type="number" name="Nombre y Apellido" />
        </form>
            
        <h4 align="center" className="colorWhite titleFinsh">Finalizar compra</h4>
        
        <div>
          <button
            className="colorBotton"
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
