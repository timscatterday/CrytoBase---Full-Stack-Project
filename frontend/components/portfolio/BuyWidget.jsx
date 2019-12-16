import React, {Component} from 'react';

const fromUSDtoCrypto = (amount_usd, crypto_per_usd) => {
    const crypto_amount = parseFloat(amount_usd) * parseFloat(crypto_per_usd);

    const display_crypto_amount = crypto_amount.toFixed(6)

    return display_crypto_amount;
}

class BuyWidget extends Component {
    constructor(props){
        super(props);

        this.state = {
            amount_usd: 0
        },

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { amount_usd } = this.state
        const { conversion_rate, asset_name, ticker, ticker_value } = this.props
        this.props.buyCrypto(ticker, amount_usd, ticker_value, fromUSDtoCrypto(amount_usd, conversion_rate))
    }

    handleChange(e){
        const {target: {name, value}} = e;
        
        this.setState({[name] : value})

        console.log('BuyWidget.handleChange e' , e)
        console.log('BuyWidget.handleChange name', name) 
        console.log('BuyWidget.handleChange value', value)
    }

    render(){
        const {amount_usd} = this.state
        const {conversion_rate, asset_name, ticker} = this.props

        return(
            <div className={`${ticker}_trade`}>
                <form className='inputs' onSubmit={this.handleSubmit}>

                    <div id='first'>
                        {asset_name}
                    </div>

                    <div id='second'>
                        <div className='exchange_btn'>
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
                                value={fromUSDtoCrypto(amount_usd, conversion_rate)} 
                            />
                        </div>
                    </div>

                    <div id='third'>
                        <input type="submit" value='Buy' />
                    </div>

                </form>
            </div>
        )
    }


};

export default BuyWidget;