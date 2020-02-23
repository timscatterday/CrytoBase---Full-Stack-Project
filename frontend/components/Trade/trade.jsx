import React from 'react';
import BuyWidget from '../portfolio/BuyWidget';
import Allocation from '../portfolio/Allocation'
import { user_portfolio_value, fromStringtoDollar, user_usd_amount, user_ticker_quantity } from '../../util/transactions';



class Trade extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mode : 'Buy'
        }
    };

    componentDidMount() {
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

        const {assets, transactions} = this.props;
        const {mode} = this.state;

        return(
            <div className='buy_and_sell_container'>
                <div className='buy_and_recent_container'>
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

                    <div className='allocation_table_container_trade'>
                        <table className='allocation_table_trade'>
                            <th className='table_header_trade'>
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

                            <tr className='usd_row'>
                                <td className='first_col'>
                                    <div className='pic'><img src={`https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png`} height='36' width='36' /></div>
                                    <div className='crypto_name'>{`US Dollar`} <div className='symbol'>{`USD`}</div></div>
                                </td>
                                <td className='ticker_quant'>{'$ ' + parseFloat((user_usd_amount(transactions))).toFixed(2)}</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div className='FooterTrade'>
                    <div className='title_footer' to='/'>Cryptobase</div>
                    <div className='websites'>
                        <a className='Git' href="https://github.com/timscatterday">GitHub</a>
                        <a className='LinkedIn' href="https://www.linkedin.com/in/timothy-scatterday-09283067/">LinkedIn</a>
                    </div>
                    <div className='copyrightandnomics'>
                        <p class="copyright"> © 2020 CryptoBase by Tim Scatterday</p>
                        <div className='nomics'><a href="https://nomics.com">Crypto Market Cap & Pricing Data Provided By Nomics</a></div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Trade;