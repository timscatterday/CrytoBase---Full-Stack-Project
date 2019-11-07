import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props)
    };


    render(){
        return(
        <div>
            <div class='top_main'>
                <p className='main_line'>Buy and sell digital currency</p>
                <p className='sub_line'>Cryptobase is the easiest place to buy and sell digital currencies</p>
            </div>

            <table className='crypto_chart'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                            <td><div className='BitcoinLogo'><div className='pic'><img src="http://www.thecoinface.com/assets/btc-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png" height='36' width='36' /></div> <div className='crypto_name'>Bitcoin</div></div></td>
                        <td>$9200</td>
                        <td>-1.10%</td>
                        <td>Nan</td>
                    </tr>
                    <tr>
                            <td><div className='EthereumLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/eth-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png' width='36' height='36' /></div> <div className='crypto_name'>Ethereum</div></div></td>
                        <td>$186</td>
                        <td>-1.70%</td>
                        <td>Nan</td>
                    </tr>
                    <tr>
                        <td><div className='BitcoinCashLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/bch-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png' width='36' height='36' /></div> <div className='crypto_name'>Bitcoin Cash</div></div></td>
                        <td>$290</td>
                        <td>-2.81%</td>
                        <td>Nan</td>
                    </tr>
                    <tr>
                            <td><div className='LitecoinLogo'><div className='pic'><img src='http://www.thecoinface.com/assets/ltc-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png' width='36' height='36' /></div> <div className='crypto_name'>Litecoin</div></div></td>
                        <td>$61</td>
                        <td>-3.86%</td>
                        <td>Nan</td>
                    </tr>
                    <tr>
                            <td><div className='EOSLogo'><div className='pic'><img src='https://dynamic-assets.coinbase.com/deaca3d47b10ed4a91a872e9618706eec34081127762d88f2476ac8e99ada4b48525a9565cf2206d18c04053f278f693434af4d4629ca084a9d01b7a286a7e26/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png' width='36' height='36' /></div> <div className='crypto_name'>EOS</div></div></td>
                        <td>$3</td>
                        <td>-2.20%</td>
                        <td>Nan</td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
    }
};

export default Home;