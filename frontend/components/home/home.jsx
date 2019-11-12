import React from 'react';
import { Sparklines, SparklinesLine} from 'react-sparklines';

class Home extends React.Component {
    
    constructor(props){
        super(props);
    
    };

    componentDidMount(){
        this.props.getAssets();

    }

    render(){
        if (!this.props.assets['BTC']){
            return null;
        }

        return(
        <div>
            <div class='top_main'>
                <p className='main_line'>Buy and sell digital currency</p>
                <p className='sub_line'>Cryptobase is the easiest place to buy, sell, and manage your digital currencies</p>
            </div>

            <div className='home_input'>
                <div className='main_form'>
                    <input className='input' type="text" placeholder='Email Address'/>
                </div>

                <div className='main_button'>
                    <button className='home_button'>Get Started</button>
                </div>
            </div>


            <table className='crypto_chart'>
                <thead>
                    <tr>
                        <th><div className='name'>Name</div></th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className='BitcoinLogo'><div className='pic'><img src="http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png" height='36' width='36' /></div> <div className='crypto_name'>Bitcoin <div className='symbol'>BTC</div></div></div></td>
                        <td>{this.props.assets['BTC']['USD']['PRICE']}</td>
                        <td style={{color: this.props.assets['BTC']['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red'}}>% {this.props.assets['BTC']['USD']['CHANGEPCT24HOUR']}</td>
                        <td>
                            <div className='graph'>
                                <Sparklines data={Object.values(this.props.assets['BTC'].prices)} width={100} height={50} margin={5}>
                                    <SparklinesLine color="#f79319" />
                                </Sparklines> 
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div className='EthereumLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png' width='36' height='36' /></div> <div className='crypto_name'>Ethereum <div className='symbol'>ETH</div></div></div></td>
                        <td>{this.props.assets['ETH']['USD']['PRICE']}</td>
                        <td style={{ color: this.props.assets['ETH']['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>% {this.props.assets['ETH']['USD']['CHANGEPCT24HOUR']}</td>
                        <td><div className='graph'>
                                <Sparklines data={Object.values(this.props.assets['ETH'].prices)} width={100} height={50} margin={5}>
                                    <SparklinesLine color="#7885cb" />
                                </Sparklines>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div className='BitcoinCashLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png' width='36' height='36' /></div> <div className='crypto_name'>Bitcoin Cash <div className='symbol'>BCH</div></div></div></td>
                        <td>{this.props.assets['BCH']['USD']['PRICE']}</td>
                        <td style={{ color: this.props.assets['BCH']['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>% {this.props.assets['BCH']['USD']['CHANGEPCT24HOUR']}</td>
                        <td>
                            <div className='graph'>
                                <Sparklines data={Object.values(this.props.assets['BCH'].prices)} width={100} height={50} margin={5}>
                                    <SparklinesLine color="#8dc351" />
                                </Sparklines>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div className='LitecoinLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png' width='36' height='36' /></div> <div className='crypto_name'>Litecoin <div className='symbol'>LTC</div></div></div></td>
                        <td>{this.props.assets['LTC']['USD']['PRICE']}</td>
                        <td style={{ color: this.props.assets['LTC']['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>% {this.props.assets['LTC']['USD']['CHANGEPCT24HOUR']}</td>
                        <td>
                            <div className='graph'>
                                 <Sparklines data={Object.values(this.props.assets['LTC'].prices)} width={100} height={50} margin={5}>
                                    <SparklinesLine color="#c2c2c2" />
                                </Sparklines>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div className='EOSLogo'><div className='pic'><img src='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png' width='36' height='36' /></div> <div className='crypto_name'>EOS <div className='symbol'>EOS</div></div></div></td>
                        <td>{this.props.assets['EOS']['USD']['PRICE']}</td>
                        <td style={{ color: this.props.assets['EOS']['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>% {this.props.assets['EOS']['USD']['CHANGEPCT24HOUR']}</td>
                        <td>
                            <div className='graph'>
                                <Sparklines data={Object.values(this.props.assets['EOS'].prices)} width={100} height={50} margin={5}>
                                    <SparklinesLine color="000000" />
                                </Sparklines>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


            <div className='main_bar'>
                <div className='bar_stats'>
                    <p className='stat'> <div className='big'> $10M+ </div><div>digital currencies exchanged</div></p>
                    <p className='stat'> <div className='big'>50+</div><div>countries supported</div></p>
                    <p className='stat'> <div className='big'>1M+ </div><div>traders served</div></p>
                </div>
            </div>


            <div className ='sub_bar'>
                
                <div className='subbar_header'><p>Get started today!</p></div>

                    <div className='subbar_stats'>
                            <div className='pad'><img src="person_logo.png" height='50' length='50'/><div className='stats'>Create an account</div></div>
                            <div className='pad'><img src="money_logo.png" height='50' length='50'/><div className='stats'>Link your bank account</div></div>
                            <div className='pad'><img src="trading.png" height='50' length='50'/><div className='stats'>Start buying and selling</div></div>

                    </div>
            </div>  

                <div className='line'></div>
                <div className='line2'></div>

        </div>
      )

    }
};

export default Home;