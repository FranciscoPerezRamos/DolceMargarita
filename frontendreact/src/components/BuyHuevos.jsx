import React from 'react';
import BuyProduct from './BuyProduct.jsx';
import Selector from '../components/Selector.jsx';



export default class BuyHuevos extends BuyProduct {
    componentDidMount() {
        super.componentDidMount();
    }

    renderTitle() {
        return "Huevos";
    }

    img() {
        return "http://aspic.es/wp-content/uploads/2016/03/Huevos-de-chocolate-20.jpg";
    }

    textDescription() {
        return "Increibles huevos de chocolates de diferentes tamaños";
    }

    selectTamanio = (selectTamanio) => {
        this.setState({tamanioSeleccionado: selectTamanio})
    }

    renderTamaniosDeChocolate() {
        return(
            <div>
                <Selector options={this.state.tamanios} selectOption={this.selectTamanio} />
            </div>
        );
    }

    agregarAlCarrito = () => {

        const precio = this.state.quantity * (this.props.precio + parseInt(this.state.tamanioSeleccionado.price));


        let producto = {
            forma: 'Huevo',
            tamanio: this.state.tamanioSeleccionado.nombre,
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
                {this.renderTamaniosDeChocolate()}
                {this.renderButtonToConfirm()}
            </div>
        );
    }
}