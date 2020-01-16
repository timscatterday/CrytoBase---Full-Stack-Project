import React from 'react';
import { user_portfolio_value, user_ticker_quantity, user_ticker_usd_value, fromStringtoDollar } from '../../util/transactions';
import PBar from './PBar'

class Allocation extends React.Component {

    constructor(props){
        super(props)

        this.allocation_percentage = this.allocation_percentage.bind(this);
    };

    allocation_percentage(){
        const {ticker, transactions, assets} = this.props;
        const ticker_value = user_ticker_usd_value(ticker, transactions, assets[ticker]['USD']['PRICE']);
        const portfolio_value = (user_portfolio_value(transactions, assets))
        
        if (ticker_value === 0 && portfolio_value === 0){
            return "0.00"
        }
        return (ticker_value / portfolio_value * 100).toFixed(2) 
    };

    render(){
        const { assets, ticker, img, assetname, lower_ticker, transactions} = this.props;

        return (
            
            <tr className='table_body'>
                <td className="first_row">
                    <div className={`${assetname}Logo`}>
                    <div className='pic'><img src={img} height='36' width='36' /></div>
                    <div className='crypto_name'>{assetname} <div className='symbol'>{ticker}</div></div></div></td>
                <td>{(user_ticker_quantity(ticker, transactions)).toFixed(4)} {ticker}</td>
                <td><PBar allocation={this.allocation_percentage()} /></td>
            </tr>
        )
    }


};

export default Allocation;