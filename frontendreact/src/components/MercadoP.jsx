import React from 'react';
import '../dist/LoginDm.css';
import { Link } from 'react-router-dom';
import API from '../service/api.js';

export default class MercadoP extends React.Component {

    constructor(proops){
        super(proops)
        this.state = {
            initPoint: '',
        }
    }

    componentDidMount(){
        API.post('/testMP', {
            "id": 12323,
            "title": "Chocolitios",
            "quantity": 1,
            "currencyId": "ARS",
            "unitePrice": "1.0",
            "email": "l.e.avalos1@gmail.com"
        })
            .then(response => this.setState({ initPoint: response }))
            .catch(console.log);
    }   


    render() {
        return (
        <div>
            <a href={this.state.initPoint}>Pay</a>
        </div>
        );
    }
}