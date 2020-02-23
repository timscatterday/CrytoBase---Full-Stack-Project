import React from 'react';
import BuyWidget from '../portfolio/BuyWidget';
import { user_portfolio_value, fromStringtoDollar, user_usd_amount, user_ticker_quantity } from '../../util/transactions';



class Trade extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mode : 'Buy'
        }
    };

    BuyorSellCrypto(ticker, amount_usd, exc_rate, ticker_quantity, type) {

        const transaction = {
            ticker: ticker,
            price: exc_rate,
            amount: ticker_quantity,
            type: type
        };
        this.props.createTransaction(transaction);
    };

    render(){

        const {assets, transactions} = this.props;
        const {mode} = this.state;

        return(
            <div className='buy_and_sell_container'>
                <div className='buy_widget_container'>
                    <div className='buy_and_sell'>
                        <div className='buy_sell_button_container'>
                            <button className='buy_sell_button' onClick={() => { this.setState({ mode: "Buy" }) }}>Buy</button>
                            <button className='buy_sell_button' onClick={() => this.setState({ mode: "Sell" })}>Sell</button>
                        </div>

                        <div className='crypto_list'>
                            {assets['BTC'] &&
                                <>
                                    <BuyWidget
                                        mode={mode}
                                        available_usd={user_usd_amount(transactions)}
                                        ticker_amount={user_ticker_quantity("BTC", transactions)}
                                        BuyorSellCrypto={this.BuyorSellCrypto.bind(this)}
                                        ticker='BTC'
                                        conversion_rate={parseFloat(assets['BTC']['conversion']).toFixed(6)}
                                        asset_name="Bitcoin"
                                        ticker_value={fromStringtoDollar(assets['BTC']['USD']['PRICE'])}
                                    />
                                    <BuyWidget
                                        mode={mode}
                                        available_usd={user_usd_amount(transactions)}
                                        ticker_amount={user_ticker_quantity("ETH", transactions)}
                                        BuyorSellCrypto={this.BuyorSellCrypto.bind(this)}
                                        ticker='ETH'
                                        conversion_rate={parseFloat(assets['ETH']['conversion']).toFixed(6)}
                                        asset_name="Ethereum"
                                        ticker_value={fromStringtoDollar(assets['ETH']['USD']['PRICE'])}
                                    />
                                    <BuyWidget
                                        mode={mode}
                                        available_usd={user_usd_amount(transactions)}
                                        ticker_amount={user_ticker_quantity("BCH", transactions)}
                                        BuyorSellCrypto={this.BuyorSellCrypto.bind(this)}
                                        ticker='BCH'
                                        conversion_rate={parseFloat(assets['BCH']['conversion']).toFixed(6)}
                                        asset_name="Bitcoin Cash"
                                        ticker_value={fromStringtoDollar(assets['BCH']['USD']['PRICE'])}
                                    />
                                    <BuyWidget
                                        mode={mode}
                                        BuyorSellCrypto={this.BuyorSellCrypto.bind(this)}
                                        available_usd={user_usd_amount(transactions)}
                                        ticker_amount={user_ticker_quantity("LTC", transactions)}
                                        ticker='LTC'
                                        conversion_rate={parseFloat(assets['LTC']['conversion']).toFixed(6)}
                                        asset_name="Litecoin"
                                        ticker_value={fromStringtoDollar(assets['LTC']['USD']['PRICE'])}
                                    />
                                    <BuyWidget
                                        mode={mode}
                                        BuyorSellCrypto={this.BuyorSellCrypto.bind(this)}
                                        available_usd={user_usd_amount(transactions)}
                                        ticker_amount={user_ticker_quantity("EOS", transactions)}
                                        ticker='EOS'
                                        conversion_rate={parseFloat(assets['EOS']['conversion']).toFixed(6)}
                                        asset_name="EOS"
                                        ticker_value={fromStringtoDollar(assets['EOS']['USD']['PRICE'])}
                                    />

                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Trade;