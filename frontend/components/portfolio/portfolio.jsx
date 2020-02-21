import React from 'react';
import BuyWidget  from './BuyWidget';
import Allocation from './Allocation';
import RecentTransactions from './RecentTransactions'
import { user_portfolio_value, fromStringtoDollar, user_usd_amount, user_ticker_quantity} from '../../util/transactions';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import ls from 'local-storage'
import { parse } from 'url';

class Portfolio extends React.Component {
   
    constructor(props){
        super(props)

        this.state = {
            mode: 'Buy',
            data : []
        };
    }

    componentDidMount(){
        this.props.getAssets();
        this.props.fetchTransactions();
    }

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
        const {getAssets, assets, transactions} = this.props;
        const {mode} = this.state;

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    return (


    <div className='user_dashboard'>

            <div className='user_portfolio'>
                
                <div className='port_value_container'>
                    
                    <div className='USD_amount'>
                        <div className='my_port'>My Portfolio</div>
                        <div className='available'>
                            <p className='available_usd'>Available USD:</p>
                            <p>${user_usd_amount(transactions)}</p>
                        </div>
                    </div>
                    
                    <div className='port_value'>
                        <div className='port_title'>Portfolio Value</div>
                        <div className='port_amount'>${parseFloat(user_portfolio_value(transactions, assets)).toFixed(2)}</div>
                    </div>

                </div>

        
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
                                    ticker_value = {fromStringtoDollar(assets['BTC']['USD']['PRICE'])}
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

        <div className='assets_recenttransactions_container'>
                    <table className='allocation_table'>
                        <th className='table_header'>
                            <th>Your Assets</th>
                        </th>

                        <Allocation assets={assets}
                            transactions={transactions}
                            assetname='Bitcoin'
                            ticker='BTC'
                            lower_ticker='btc'
                            img='http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png'
                            pieChart={this.state.data}
                        />
                        <Allocation assets={assets}
                            transactions={transactions}
                            assetname='Ethereum'
                            ticker='ETH'
                            lower_ticker='btc'
                            img='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png'
                            pieChart={this.state.data}
                        />
                        <Allocation
                            assets={assets}
                            transactions={transactions}
                            assetname='BitcoinCash'
                            ticker='BCH'
                            lower_ticker='bch'
                            img='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png'
                            pieChart={this.state.data}
                        />
                        <Allocation
                            assets={assets}
                            transactions={transactions}
                            assetname='Litecoin'
                            ticker='LTC'
                            lower_ticker='ltc'
                            img='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png'
                            pieChart={this.state.data}
                        />
                        <Allocation
                            assets={assets}
                            transactions={transactions}
                            assetname='EOS'
                            ticker='EOS'
                            lower_ticker='eos'
                            img='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png'
                            pieChart={this.state.data}
                        />

                    </table>

                    <table className='allocation_table' id='recenttransactions'>
                        <th className='table_header_recent'>
                            Recent Transactions
                        </th>
                        <RecentTransactions transaction={transactions[transactions.length - 1]} />
                        <RecentTransactions transaction={transactions[transactions.length - 2]} />
                        <RecentTransactions transaction={transactions[transactions.length - 3]} />
                        <RecentTransactions transaction={transactions[transactions.length - 4]} />
                        <RecentTransactions transaction={transactions[transactions.length - 5]} />
                    </table>

        </div>

        <div className='Footer'>
                <div>
                <a href="https://github.com/"></a>
                <a href=""></a>
                <a href=""></a>
            </div>
            <div className='copyrightandnomics'>
                <p class="copyright"> © 2020 CryptoBase </p>
                <div className='nomics'><a href="https://nomics.com">Crypto Market Cap & Pricing Data Provided By Nomics</a></div>
            </div>
        </div>
                
    </div>

        )
    };

};

export default Portfolio;