import React from 'react';



class Allocation extends React.Component {

    constructor(props){
        super(props)
    };

    componentDidMount() {
        this.props.getAssets();
    }

    render(){

       

        const { assets, ticker, img, assetname, lower_ticker, user_ticker_quantity,user_ticker_usd_value, transactions, user_portfolio_value } = this.props;

        return (
            
            <tr className='table_body'>
                <td><div className={`${assetname}Logo`}><div className='pic'><img src={img} height='36' width='36' /></div> <div className='crypto_name'>{assetname} <div className='symbol'>{ticker}</div></div></div></td>
                <td>{(user_ticker_quantity(ticker, transactions)).toFixed(4)}</td>
                <td>% {((user_ticker_usd_value(ticker, transactions, assets[ticker]['USD']['PRICE']) / user_portfolio_value(transactions, assets)) * 100).toFixed(2)}</td>
            </tr>
        )
    }


};

export default Allocation;