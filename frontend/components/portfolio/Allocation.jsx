import React from 'react';

class Allocation extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            portfolio_value: parseInt(localStorage.getItem('tim_portfolio')) || 0,
            btc_value: parseFloat(localStorage.getItem('tim_btc')) || 0,
            eth_value: parseFloat(localStorage.getItem('tim_eth')) || 0,
            bch_value: parseFloat(localStorage.getItem('tim_bch')) || 0,
            ltc_value: parseFloat(localStorage.getItem('tim_ltc')) || 0,
            eos_value: parseFloat(localStorage.getItem('tim_eos')) || 0,
            total: ((parseFloat(localStorage.getItem('tim_btc')) || 0) + (parseFloat(localStorage.getItem('tim_eth')) || 0) + (parseFloat(localStorage.getItem('tim_bch')) || 0) + (parseFloat(localStorage.getItem('tim_ltc')) || 0) + (parseFloat(localStorage.getItem('tim_eos')) || 0)) || 0
        };

    };

    componentDidMount() {
        this.props.getAssets();
    }

    render(){

        const {ticker, img, assetname } = this.props;

        return (
            <tr className='table_body'>
                <td><div className={`${assetname}Logo`}><div className='pic'><img src={img} height='36' width='36' /></div> <div className='crypto_name'>{assetname} <div className='symbol'>{ticker}</div></div></div></td>
                <td>{parseFloat(this.state.btc_value * parseFloat(this.props.assets[`${ticker}`]['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.btc_value / this.state.total) * 100).toFixed(2) ? (parseFloat(this.state.btc_value / this.state.total) * 100).toFixed(2) : 0}</td>
            </tr>
        )
    }


};

export default Allocation;