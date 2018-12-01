import React from 'react';
import BuyProduct from './BuyProduct.jsx';



export default class BuyBombones extends BuyProduct {
    componentDidMount() {
        super.componentDidMount();
    }

    renderTitle() {
        return "Bombones";
    }

    renderItems() {
        return (
            <div>
                {this.renderCounter()}
                {this.renderButtonToConfirm()}
            </div>
        );
    }

    img() {
        return "https://t1.uc.ltmcdn.com/images/5/3/9/img_como_hacer_bombones_de_chocolate_con_licor_37935_600.jpg";
    }

    textDescription() {
        return "Bombones finos surtidos de chocolates blanco, chocolate con leche y semi-amargo"
    }

    renderInfo() {
        return (
            <div className="col">
                <h5><span>
                    {this.textDescription()}
                    </span></h5>
                <div>
                    {this.renderCounter()}
                    {this.renderButtonToConfirm()}
                </div>
            </div>
        );
    }

    addQuantity() {
        this.setState({ quantityInQuatersDecimal: this.state.quantityInQuatersDecimal + 0.250})
        this.setState({ quantityInQuaters: this.state.quantityInQuaters + 250})
    }
    removeQuantity() {
        if(this.state.quantityInQuaters > 250) {
            this.setState({ quantityInQuaters: this.state.quantityInQuaters - 250})
            this.setState({ quantityInQuatersDecimal: this.state.quantityInQuatersDecimal - 0.250})
        }
    }
    renderUnits() {
        return this.state.quantityInQuaters >= 1000? 'Kgr': 'Gr'
    }

    renderQuantity() {
        return this.state.quantityInQuaters >= 1000?  this.state.quantityInQuatersDecimal : this.state.quantityInQuaters
    }
}