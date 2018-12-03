import React from 'react';
import BuyProduct from './BuyProduct.jsx';



export default class BuyFiguras extends BuyProduct {
    componentDidMount() {
        super.componentDidMount();
    }

    renderTitle() {
        return "Figuras";
    }

    img() {
        return "http://www.bellasfondos.eu/pics/2016/1220/1/chocolate-milk-horses-background-227795.jpg";
    }

    textDescription() {
        return "Figuras de chocolates, arte hecho chocolate";
    }

    agregarAlCarrito = () => {

        const precio = this.state.quantity * this.props.precio;
     

        let producto = {
            forma: 'Figura',
            tamanio: 'único',
            tipo: this.state.tipoSeleccionado.nombre,
            cantidad: this.state.quantity,
            precio: precio,
        }

        this.props.setCarrito(producto);
     
        this.props.history.push('/carrito');
    }

    renderItems() {
        return (
            <div>
                {this.renderCounter()}
                {this.renderTiposDeChocolate()}
                {this.renderButtonToConfirm()}
            </div>
        );
    }
}