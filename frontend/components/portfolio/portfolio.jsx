import React from 'react';
import BuyWidget  from './BuyWidget';
import Allocation from './Allocation';
import { user_portfolio_value, user_ticker_quantity, user_ticker_usd_value, fromStringtoDollar} from '../../util/transactions'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import ls from 'local-storage'
import { parse } from 'url';


class Portfolio extends React.Component {
   
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



    }

    componentDidMount(){
        this.props.getAssets();
        this.props.fetchTransactions();
    }

    buyCrypto(ticker, amount_usd, exc_rate, ticker_quantity){
        const portfolio_value = parseInt(this.state.portfolio_value) + parseInt(amount_usd);
        const ticker_value = parseInt(this.state[`${ticker}_value`]) + parseInt(amount_usd);
        this.setState({portfolio_value: portfolio_value});
        this.setState({[`${ticker}_value`]: ticker_value});

        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem([`tim_${ticker}`], this.state[`${ticker}_value`]);
        const transaction = {
            ticker: ticker, 
            price: exc_rate, 
            amount: ticker_quantity
        };
        this.props.createTransaction(transaction)
    };



    render(){

        console.log('portfolio.jsx.render this.props.transactions', this.props.transactions)

        const {getAssets, assets, transactions} = this.props;

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        return (


        <div className='user_dashboard'>

            <div className='user_portfolio'>
                
                <div className='port_value'>
                    <p className='port_title'>Portfolio Value</p>
                    <p className='port_amount'>${user_portfolio_value(transactions, assets)}</p>
                </div>

                <div className='buy_and_sell'>
                    <p>Buy and Sell</p>
                    <div className='crypto_list'>
                        {assets['BTC'] && 
                          <>
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='BTC'
                                    conversion_rate={parseFloat(assets['BTC']['conversion']).toFixed(6)}
                                    asset_name="Bitcoin"
                                    ticker_value = {fromStringtoDollar(assets['BTC']['USD']['PRICE'])}
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='ETH'
                                    conversion_rate={parseFloat(assets['ETH']['conversion']).toFixed(6)}
                                    asset_name="Ethereum"
                                    ticker_value={fromStringtoDollar(assets['ETH']['USD']['PRICE'])}
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='BCH'
                                    conversion_rate={parseFloat(assets['BCH']['conversion']).toFixed(6)}
                                    asset_name="Bitcoin Cash"
                                    ticker_value={fromStringtoDollar(assets['BCH']['USD']['PRICE'])}
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='LTC'
                                    conversion_rate={parseFloat(assets['LTC']['conversion']).toFixed(6)}
                                    asset_name="Litecoin"
                                    ticker_value={fromStringtoDollar(assets['LTC']['USD']['PRICE'])}
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
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

                <h2 className='allocation_title'>Your Assets</h2>
                
        <table>
            <tr className='table_header' rowSpan='3'>
                <th>Asset</th>
                <th>Balance</th>
                <th>Allocation</th>
            </tr>

            <Allocation assets={assets} getAssets={getAssets} assetname='Bitcoin' ticker='BTC' lower_ticker='btc' img='http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png' />
            <Allocation assets={assets} getAssets={getAssets} assetname='Ethereum' ticker='ETH' lower_ticker='btc' img='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png' />
            <Allocation assets={assets} getAssets={getAssets} assetname='Bitcoin Cash' ticker='BCH' lower_ticker='bch' img='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png' />
            <Allocation assets={assets} getAssets={getAssets} assetname='Litecoin' ticker='LTC' lower_ticker='ltc' img='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png' />
            <Allocation assets={assets} getAssets={getAssets} assetname='EOS' ticker='EOS' lower_ticker='eos' img='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png' />

            
        </table>

        </div>

        )
    };

};

export default Portfolio;