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

    renderTamaniosDeChocolate() {
        return(
            <div>
                <Selector options={this.state.tamanios}  />
            </div>
        );
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