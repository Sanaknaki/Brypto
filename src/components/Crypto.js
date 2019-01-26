import React, { Component } from 'react';
import './Crypto.css';
import Currency from './Currency.js';
import axios from 'axios';

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    // Get currency data JSON
    fetchCurrencyData = () => {
        axios
            .get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
                .then(response => {
                    const result = response.data
                    this.setState({data: result})
                }).catch(err => console.log(err))
    }
    
    // When component is loaded, fetch currecy and repeat this every minute to update.
    componentDidMount() {
        this.fetchCurrencyData()
        this.interval = setInterval (() => this.fetchCurrencyData(), 60*1000)
    }

    render() {
        const crypto = this.state.data.map(currency => (
            <Currency data={currency} key={currency.id} />
        ));

        return(
            <React.Fragment>
                {crypto}
            </React.Fragment>
        )
    }
};

export default Crypto;