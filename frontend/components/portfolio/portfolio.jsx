import React from 'react';
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

        this.buyBTC = this.buyBTC.bind(this);
        this.buyETH = this.buyETH.bind(this);
        this.buyBCH = this.buyBCH.bind(this);
        this.buyLTC = this.buyLTC.bind(this);
        this.buyEOS = this.buyEOS.bind(this);



    }

    componentDidMount(){
        this.props.getAssets();

    }


    buyBTC(event) {
        debugger;
        event.preventDefault();
        let amount = parseFloat(document.getElementById('dollar').value);
        let exc_rate = parseFloat(document.getElementById('crypto_exc').value)

        this.setState({portfolio_value: this.state.portfolio_value += amount})
        this.setState({btc_value: this.state.btc_value += amount })
        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem('tim_btc', this.state.btc_value)
    }

    buyETH(event) {
        event.preventDefault();
        let eth_amount = parseFloat(document.getElementById('eth_dollar').value);
        let eth_exc_rate = parseFloat(document.getElementById('eth_crypto_exc').value)

        this.setState({ portfolio_value: this.state.portfolio_value += eth_amount})
        this.setState({ eth_value: this.state.eth_value += eth_amount })
        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem('tim_eth', this.state.eth_value)
    }

    buyBCH(event) {
        event.preventDefault();
        let bch_amount = parseFloat(document.getElementById('bch_dollar').value);
        let bch_exc_rate = parseFloat(document.getElementById('bch_crypto_exc').value)

        this.setState({bch_value: this.state.portfolio_value += bch_amount })
        this.setState({ bch_value: this.state.bch_value += bch_amount })
        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem('tim_bch', this.state.bch_value)
    }

    buyLTC(event) {
        event.preventDefault();
        let ltc_amount = parseFloat(document.getElementById('ltc_dollar').value);
        let ltc_exc_rate = parseFloat(document.getElementById('ltc_crypto_exc').value)


        this.setState({ portfolio_value: this.state.portfolio_value += ltc_amount })
        this.setState({ ltc_value: this.state.ltc_value += ltc_amount })
        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem('tim_ltc', this.state.ltc_value)
    }

    buyEOS(event) {
        event.preventDefault();
        let eos_amount = parseFloat(document.getElementById('eos_dollar').value);
        let eos_exc_rate = parseFloat(document.getElementById('eos_crypto_exc').value)

        this.setState({ portfolio_value: this.state.portfolio_value += eos_amount })
        this.setState({ eos_value: this.state.eos_value += eos_amount })
        localStorage.setItem('tim_portfolio', this.state.portfolio_value)
        localStorage.setItem('tim_eos', this.state.eos_value)
    }



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
                        <div className='btc_trade'>
                            <form className='inputs' onSubmit={this.buyBTC}>
                                
                                <div id='first'>
                                    Bitcoin
                                </div>

                                <div id='second'>
                                    <div className='exchange_btn'>
                                        <input className='buy_btn' id='dollar' type="number" placeholder='USD' onChange={this.btc_convert}/>
                                        <input className='buy_btn' id='crypto_exc' type="number" value={parseFloat(this.props.assets['BTC']['conversion']).toFixed(6)}/>
                                    </div>
                                </div>

                                <div id='third'>
                                    <input type="submit" value='Buy' />
                                </div>
                            
                            </form>
                        </div>

                            <div className='eth_trade'>
                                <form id='ETH_form' className='inputs' onSubmit={this.buyETH}>

                                    <div id='first'>
                                        Ethereum
                                    </div>

                                    <div id='second'>
                                        <div className='exchange_btn'>
                                            <input className='buy_btn' id='eth_dollar' type="number" placeholder='USD' />
                                            <input className='buy_btn' id='eth_crypto_exc' type="number" value={parseFloat(this.props.assets['ETH']['conversion']).toFixed(6)} />
                                        </div>
                                    </div>

                                    <div id='third'>
                                        <input type="submit" value='Buy' />
                                    </div>
                            
                            </form>
                        </div>
                        
                        <div className='bch_trade'>
                                <form className='inputs' onSubmit={this.buyBCH}>

                                    <div id='first'>
                                        Bitcoin Cash
                                    </div>

                                    <div id='second'>
                                        <div className='exchange_btn'>
                                            <input className='buy_btn' id='bch_dollar' type="number" placeholder='USD' />
                                            <input className='buy_btn' id='bch_crypto_exc' type="number" value={parseFloat(this.props.assets['BCH']['conversion']).toFixed(6)} />
                                        </div>
                                    </div>

                                    <div id='third'>
                                        <input type="submit" value='Buy' />
                                    </div>

                                </form>
                        </div>

                        <div className='ltc_trade'>
                                <form className='inputs' onSubmit={this.buyLTC}>

                                    <div id='first'>
                                        Litecoin
                                    </div>

                                    <div id='second'>
                                        <div className='exchange_btn'>
                                            <input className='buy_btn' id='ltc_dollar' type="number" placeholder='USD' />
                                            <input className='buy_btn' id='ltc_crypto_exc' type="number" value={parseFloat(this.props.assets['LTC']['conversion']).toFixed(6)} />
                                        </div>
                                    </div>

                                    <div id='third'>
                                        <input type="submit" value='Buy' />
                                    </div>

                                </form>
                        </div>

                        <div className='eos_trade'>
                                <form className='inputs' onSubmit={this.buyEOS}>

                                    <div id='first'>
                                        EOS
                                    </div>

                                    <div id='second'>
                                        <div className='exchange_btn'>
                                            <input className='buy_btn' id='eos_dollar' type="number" placeholder='USD' />
                                            <input className='buy_btn' id='eos_crypto_exc' type="number" value={parseFloat(this.props.assets['EOS']['conversion']).toFixed(6)} />
                                        </div>
                                    </div>

                                    <div id='third'>
                                        <input type="submit" value='Buy' />
                                    </div>

                                </form>
                        </div>

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