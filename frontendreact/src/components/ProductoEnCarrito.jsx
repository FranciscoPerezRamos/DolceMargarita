import React from 'react';
import '../dist/CarritoView.css';
import Ionicon from 'react-ionicons';

export default class ProductoEnCarrito extends React.Component {
    render() {
        return (
            <li className="producto-en-carrito">
                <div className="forma">
                    <label>Forma: </label>
                    <div className="contenido">
                        {this.props.producto.forma}
                    </div>
                </div>
                <div className="tipo">
                    <label>Tipo: </label>
                    <div className="contenido">
                        {this.props.producto.tipo}
                    </div>
                </div>
                <div className="cantidad">
                    <label>Cantidad: </label>
                    <div className="contenido">
                        {this.props.producto.cantidad}
                    </div>
                </div>
                <div className="eliminar">
                    <div classname="trash-icon">
                    {/* VER COMO ELIMINAR AL HACER CLICK EN EL TACHO */}
                        <Ionicon icon="md-trash" color="grey" onClick={console.log('hola')}/> 
                    </div>
                    <label className="eliminar-label">Eliminar</label>
                </div>
            </li>

        )
    }
}
