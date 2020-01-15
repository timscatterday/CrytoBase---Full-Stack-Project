import React, {Component} from 'react';

const fromUSDtoCrypto = (amount_usd, crypto_per_usd) => {
    const crypto_amount = parseFloat(amount_usd) * parseFloat(crypto_per_usd);
    const display_crypto_amount = crypto_amount.toFixed(6)
    return display_crypto_amount;
}

const fromCryptoUSD = (amount_crypto, crypto_to_usd) => {
    const usd_value = parseFloat(amount_crypto) * parseFloat(crypto_to_usd);
    return usd_value;
}

class BuyWidget extends Component {
    constructor(props){
        super(props);

        this.state = {
            amount_usd: 0,
            amount_crypto: 0
        },

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const mode = this.props.mode || "Sell"
        const { amount_usd, amount_crypto } = this.state
        const { conversion_rate, asset_name, ticker, ticker_value, available_usd, ticker_amount } = this.props
        
        if(mode === 'Sell'){
            if(amount_crypto <= ticker_amount){
                this.props.BuyorSellCrypto(ticker, fromCryptoUSD(amount_crypto, ticker_value), ticker_value, amount_crypto, mode);
            } else {
                alert("Do not have enough tokens")
            }
        };

        if (mode === 'Buy'){
            if(amount_usd <= available_usd){
                this.props.BuyorSellCrypto(ticker, amount_usd, ticker_value, fromUSDtoCrypto(amount_usd, conversion_rate), mode)
            } else {
                alert("Not enough USD in account")
            }
        };
    }

    handleChange(e){
        const {target: {name, value}} = e;
        
        this.setState({[name] : value})
    }

    render(){
        const {amount_usd, amount_crypto} = this.state
        const {conversion_rate, asset_name, ticker, ticker_value} = this.props

        const mode = this.props.mode || "Sell"

        return(
            <div className={`${ticker}_trade`}>
                <form className='inputs' onSubmit={this.handleSubmit}>

                    <div id='first'>
                        {asset_name}
                    </div>

                    <div id='second'>
                        <div className='exchange_btn'>
                            { mode === "Buy" && 
                                <>
                                    <input 
                                        className='buy_btn' 
                                        type="number" 
                                        placeholder='USD' 
                                        onChange={this.handleChange} 
                                        value={amount_usd} 
                                        name="amount_usd"
                                    />
                                    <input 
                                        className='buy_btn' 
                                        id='crypto_exc' 
                                        type="number"
                                        value={fromUSDtoCrypto(amount_usd, conversion_rate) === "0.000000" ? conversion_rate : fromUSDtoCrypto(amount_usd, conversion_rate)}
                                    />
                                </>
                            }

                            {mode === "Sell" &&
                                <>
                                    <input
                                        className='buy_btn'
                                        type="number"
                                        placeholder="0"
                                        onChange={this.handleChange}
                                        value={amount_crypto}
                                        name="amount_crypto"
                                    />
                                    <input
                                        className='buy_btn'
                                        id='crypto_exc'
                                        type="number"
                                        value={fromCryptoUSD(amount_crypto, ticker_value) === 0 ? ticker_value : parseFloat(fromCryptoUSD(amount_crypto, ticker_value)).toFixed(2)}
                                    />
                                </>
                            }
                        </div>
                    </div>

                    <div id='third'>
                        <input className='mode_button' type="submit" value={mode} />
                    </div>

                </form>
            </div>
        )
    }


};

export default BuyWidget;