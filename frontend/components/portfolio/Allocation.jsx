import React from 'react';
import { user_portfolio_value, user_ticker_quantity, user_ticker_usd_value, fromStringtoDollar } from '../../util/transactions';
import {ProgressBar} from 'react-bootstrap';

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
        const { assets, ticker, img, assetname, lower_ticker, transactions, pieChart} = this.props;

        return (
         <tr>
             <td className='first_col'>
                <div className='pic'><img src={img} height='36' width='36' /></div>
                <div className='crypto_name'>{assetname} <div className='symbol'>{ticker}</div></div>
            </td>
            <td className={`progress_${ticker}`}>
                <ProgressBar now={this.allocation_percentage()} />
            </td>
            <td className='fourth_col'>
                {'  ' + this.allocation_percentage() + ' %'}
            </td>
            <td className='ticker_quant'>{(user_ticker_quantity(ticker, transactions)).toFixed(4)} {ticker}</td>
            <td className='ticker_usd'>
                <div className='ticker_usd_val'>
                    {'$ ' + user_ticker_usd_value(ticker, transactions, assets[ticker]['USD']['PRICE']).toFixed(2)}
                </div>
            </td>
        </tr>
        )
    }


};

export default Allocation;