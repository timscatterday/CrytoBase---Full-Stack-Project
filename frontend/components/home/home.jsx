import React from 'react';
import Email from './email'
import Dashboard from './dashboard';
import { Sparklines, SparklinesLine} from 'react-sparklines';
import SessionForm from '../sessions_form/session_form';

class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }
    
    };

    componentDidMount(){
        this.props.getAssets();
    }


    getStarted(){
        localStorage.setItem('email', this.state.email)
        this.props.history.push('/signup')
    }

    render(){

        if (!this.props.assets['BTC']){
            return null;
        }

        const {assets, getAssets} = this.props


        return(
        <div>
            <div class='top_main'>
                <p className='main_line'>Buy and sell digital currency</p>
                <p className='sub_line'>Cryptobase is the easiest place to buy, sell, and manage your digital currencies</p>

                <Email />

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
                    <Dashboard 
                        assetname={'Bitcoin'} 
                        ticker={'BTC'} 
                        img='http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png' 
                        assets={assets} 
                        getAssets={getAssets}
                        chart_color={'#f79319'}
                    />
                    <Dashboard 
                        assetname={'Ethereum'} 
                        ticker={'ETH'} 
                        img='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png' 
                        assets={assets} 
                        getAssets={getAssets} 
                        chart_color={'#7885cb'}
                    />
                    <Dashboard 
                        assetname={'BitcoinCash'} 
                        ticker={'BCH'} 
                        img='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png' 
                        assets={assets} 
                        getAssets={getAssets} 
                        chart_color={'#8dc351'}
                    />
                    <Dashboard 
                        assetname={'Litecoin'} 
                        ticker={'LTC'} 
                        img='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png' 
                        assets={assets} 
                        getAssets={getAssets}
                        chart_color={"#c2c2c2"} 
                    />
                    <Dashboard 
                        assetname={'EOS'} 
                        ticker={'EOS'} 
                        img='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png' 
                        assets={assets} 
                        getAssets={getAssets} 
                        chart_color={'000000'}
                    />
                </tbody>
            </table>

            <div className='main_bar'>
                <div className='bar_stats'>
                    <p className='stat'>
                         <div className='big'> $10M+ </div>
                         <div>digital currencies exchanged</div>
                    </p>
                    <p className='stat'>
                         <div className='big'>50+</div>
                         <div>countries supported</div>
                    </p>
                    <p className='stat'> 
                        <div className='big'>1M+ </div>
                        <div>traders served</div>
                    </p>
                </div>
            </div>


            <div className ='sub_bar'>  
                <div className='subbar_header'><p>Get started today!</p></div>
                    <div className='subbar_stats'>
                            <div className='pad'>
                                <img src="person_logo.png" height='50' length='50'/>
                                <div className='stats'>Create an account</div>
                            </div>
                            <div className='pad'>
                                <img src="money_logo.png" height='50' length='50'/>
                                <div className='stats'>Link your bank account</div>
                            </div>
                            <div className='pad'>
                                <img src="trading.png" height='50' length='50'/>
                                <div className='stats'>Start buying and selling</div>
                            </div>
                    </div>
                    <div className='lines'>
                        <div className='line'></div>
                        <div className='line2'></div>
                    </div>
            </div> 
        </div>
      )

    }
};

export default Home;