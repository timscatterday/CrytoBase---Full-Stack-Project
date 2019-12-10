import React from 'react';
import BuyWidget  from './BuyWidget';
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

    }

    buyCrypto(ticker, amount_usd, exc_rate){
        const portfolio_value = parseInt(this.state.portfolio_value) + parseInt(amount_usd);
        const ticker_value = parseInt(this.state[`${ticker}_value`]) + parseInt(amount_usd);
        this.setState({portfolio_value: portfolio_value});
        this.setState({[`${ticker}_value`]: ticker_value});

        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem([`tim_${ticker}`], this.state[`${ticker}_value`])
    };



    render(){


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        return (


        <div className='user_dashboard'>

            <div className='user_portfolio'>
                
                <div className='port_value'>
                    <p className='port_title'>Portfolio Value</p>
                    <p className='port_amount'>${this.state.portfolio_value}</p>
                </div>

                <div className='buy_and_sell'>
                    <p>Buy and Sell</p>
                    <div className='crypto_list'>
                        {this.props.assets['BTC'] && 
                          <>
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='btc'
                                    conversion_rate={parseFloat(this.props.assets['BTC']['conversion']).toFixed(6)}
                                    asset_name="Bitcoin"
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='eth'
                                    conversion_rate={parseFloat(this.props.assets['ETH']['conversion']).toFixed(6)}
                                    asset_name="Ethereum"
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='bch'
                                    conversion_rate={parseFloat(this.props.assets['BCH']['conversion']).toFixed(6)}
                                    asset_name="Bitcoin Cash"
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='ltc'
                                    conversion_rate={parseFloat(this.props.assets['LTC']['conversion']).toFixed(6)}
                                    asset_name="Litecoin"
                                />
                                <BuyWidget
                                    buyCrypto={this.buyCrypto.bind(this)}
                                    ticker='eos'
                                    conversion_rate={parseFloat(this.props.assets['EOS']['conversion']).toFixed(6)}
                                    asset_name="EOS"
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

            <tr className='table_body'>
                <td><div className='BitcoinLogo'><div className='pic'><img src="http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png" height='36' width='36' /></div> <div className='crypto_name'>Bitcoin <div className='symbol'>BTC</div></div></div></td>
                <td>{parseFloat(this.state.btc_value * parseFloat(this.props.assets['BTC']['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.btc_value / this.state.total) * 100).toFixed(2) ? (parseFloat(this.state.btc_value / this.state.total) * 100).toFixed(2) : 0}</td>
            </tr>

            <tr className='table_body'>
                <td><div className='EthereumLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png' width='36' height='36' /></div> <div className='crypto_name'>Ethereum <div className='symbol'>ETH</div></div></div></td>
                <td>{parseFloat(this.state.eth_value * parseFloat(this.props.assets['ETH']['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.eth_value / this.state.total) * 100).toFixed(2) || 0}</td>
            </tr>

            <tr className='table_body'>
                <td><div className='BitcoinCashLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png' width='36' height='36' /></div> <div className='crypto_name'>Bitcoin Cash <div className='symbol'>BCH</div></div></div></td>
                <td>{parseFloat(this.state.bch_value * parseFloat(this.props.assets['BCH']['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.bch_value / this.state.total) * 100).toFixed(2) || 0}</td>
            </tr>

            <tr className='table_body'>
                <td><div className='LitecoinLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png' width='36' height='36' /></div> <div className='crypto_name'>Litecoin <div className='symbol'>LTC</div></div></div></td>
                <td>{parseFloat(this.state.ltc_value * parseFloat(this.props.assets['LTC']['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.ltc_value / this.state.total) * 100).toFixed(2) || 0}</td>
            </tr>

            <tr className='table_body'>
                <td><div className='EOSLogo'><div className='pic'><img src='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png' width='36' height='36' /></div> <div className='crypto_name'>EOS <div className='symbol'>EOS</div></div></div></td>
                <td>{parseFloat(this.state.eos_value * parseFloat(this.props.assets['EOS']['conversion']).toFixed(4)).toFixed(5)}</td>
                <td>% {(parseFloat(this.state.eos_value / this.state.total) * 100).toFixed(2) || 0}</td>
            </tr>

            
        </table>

        </div>

        )
    };

};

export default Portfolio;