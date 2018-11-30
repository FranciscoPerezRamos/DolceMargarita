import React from 'react';
import Ionicon from 'react-ionicons';
import ProductoEnCarrito from './ProductoEnCarrito';
import '../dist/CarritoView.css';

export default class CarritoView extends React.Component {

    carrito = [
        {
        forma: "Huevos",
        tipo: "Blanco",
        cantidad: 1
        },
        {
        forma: "Figura",
        tipo: "Con leche",
        cantidad: 3
        },
        {
        forma: "Bombones",
        tipo: "Surtidos",
        cantidad: 1
        }
    ]

    mostrarProductos = () => {
        return this.carrito.map((producto) =>
        <ProductoEnCarrito
            producto={producto}
        />
        )
    }

    irAHome = () => {
        this.props.history.push('/home');
    }

    irAFinalizar = () => {
        this.props.history.push('/confirm');
    }

    render() {
        return(
        <div>
            <div className="titulo">
            <h1>Tu carrito</h1>
            </div>
            <div className="lista-productos">
            { this.mostrarProductos() }
            </div>
            <div className="fila-botones">
            <div className="boton-continuar-comprando">
            <button className="btn-dm" type="button" onClick={this.irAHome}>Continuar comprando</button>
            </div>
            <div className="boton-finalizar-compra">
                <button className="btn-dm" type="button" onClick={this.irAFinalizar}>Finalizar compra</button>
                </div>
            </div>
        </div>
        )
    }
}