import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/buyProduct.css';
import API from '../service/api.js';
import Header from './Header.jsx';
import Ionicon from 'react-ionicons';
import Selector from '../components/Selector.jsx';


export default class BuyProduct extends React.Component {

    constructor(proops) {
        super(proops);
        this.state = {
            product: '',
            forma: '',
            quantity: 1,
            quantityInQuaters: 250,
            quantityInQuatersDecimal: 0.250,
            tipos: [],
            tamanios: [],
            tipoSeleccionado: '',
            tamanioSeleccionado: '',
        };
    }

    componentDidMount() {
        this.tiposDeChocolate();
        this.tamniosDeChocolate();
    }

    tiposDeChocolate() {
        API.get("/tiposChocolate")
         .then(response => this.setState({ tipos: response }))
         
         .catch(console.log('Error encontrando chocolitios'));
    }
     
    tamniosDeChocolate() {
        API.get("/tamanios")
         .then(response => this.setState({ tamanios: response }))
         .catch(console.log('Error encontrando tamnios de chocolitios'));
    }

    

    renderTiposDeChocolate() {
        return(
            <div>
                {<Selector options={this.state.tipos} selectOption={this.selectTipo}/>}
            </div>
        );
    }

    selectTipo = (tipoSeleccionado) => {
        this.setState({tipoSeleccionado}); 
    }

    renderButtonToConfirm() {
        return(
            <div>
                <br/>
                <button type="button" className="btn btn-block bt-color" onClick={this.agregarAlCarrito}>
                    <span>Añadir a Carrito</span>
                </button>
            </div>
        );
    }

    removeQuantity() {
        if(this.state.quantity > 1) this.setState({ quantity: this.state.quantity - 1});
    }

    addQuantity() {
        this.setState({ quantity: this.state.quantity + 1});
    }


    renderUnits() {
        return 'Uds';
    }

    renderQuantity() {
        return this.state.quantity;
    }

    renderStateOfQuantity() {
        return (
            <div className="col">
                <span className="spanC">{this.renderQuantity()} {this.renderUnits()}</span>
            </div>
        );
    }

    renderCounter() {
        return(
            <div>
                <button type="button" className="btn btn-outline-warning col" onClick={()=> (this.addQuantity())}>
                    <Ionicon icon="ios-arrow-up" color="goldenrod" fontSize="35px" />
                </button>
                    {this.renderStateOfQuantity()}
                <button type="button" className="btn btn-outline-warning col" onClick={()=> (this.removeQuantity())}>
                    <Ionicon icon="ios-arrow-down" color="goldenrod" fontSize="35px" />
                </button>
            </div>
        );
    }


    renderInfo() {
        return (
            <div className="col">
                <h5>
                    <span>
                        {this.textDescription()}
                    </span>
                </h5>
                {this.renderItems()}
            </div>
        );
    }


    renderImg() {
        return (
            <div className="col">
                <img src={this.img()} height="300px" alt="producto selescionado" />
            </div>
        );
    }

    renderInfoAndImg() {
        return (
            <div className="row"> 
                {this.renderImg()}
                {this.renderInfo()}
            </div>
        );
    }
    

    renderContent() {
        return(
            <div>
               <h1>{this.renderTitle()}</h1>
                <div className="container">
                    {this.renderInfoAndImg()}
                </div>
            </div>
        );
    }

    render() {
        return (
            <main >
                <Header />
                {this.renderContent()}
            </main>
        );
    }


}