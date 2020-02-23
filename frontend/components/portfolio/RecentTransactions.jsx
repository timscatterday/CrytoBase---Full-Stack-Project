import React from 'react';

class RecentTransactions extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            date : []
        };
    };

    render(){
       
        const {transaction} = this.props;

        if(!transaction){
            return null
        };

        let type = {
            'Buy' : 'Bought',
            'Sell' : 'Sold'
        };

        let coin = {
            'BTC' : 'Bitcoin',
            'ETH' : 'Ethereum',
            'BCH' : 'Bitcoin Cash',
            'LTC' : 'Litecoin',
            'EOS' : 'EOS'
        }

        let months = {
            '01' : "Jan",
            '02' : "Feb",
            '03' : "Mar",
            '04' : "Apr",
            '05' : 'May',
            '06' : 'Jun',
            '07' : 'Jul',
            '08' : 'Aug',
            '09' : 'Sep',
            '10' : 'Oct',
            '11' : 'Nov',
            '12' : 'Dec'
        };

        function convertDate(date){
            let result = [];
            result.push(months[date.split('T')[0].split('-')[1]]);
            result.push(date.split('T')[0].split('-')[2]);
            return result;
        };

        function convertTransaction(transaction){
            if(transaction.tx_type === 'Buy'){
                return 'Bought'
            } else {
                return 'Sold'
            }
        };

        function convertCoin(transaction){
            if(transaction.asset === 'BTC'){
                return 'Bitcoin'
            } else if (transaction.asset === 'ETH'){
                return 'Ethereum'
            } else if(transaction.asset === 'BCH'){
                return 'Bitcoin Cash'
            } else if(transaction.asset === 'LTC'){
                return 'Litecoin'
            } else {
                return 'EOS'
            }
        };

        function convertAmount(transaction){
            if(transaction.tx_type === 'Buy'){
                return '+ ' + transaction.amount; 
            } else {
                return '- ' + transaction.amount;
            }
        }

        return(
            <tr>
               <td className='recent_date'>
                   <div className='date_month'>
                        {convertDate(transaction.created_at)[0]}
                   </div>
                    <div className='date_day'>
                        {convertDate(transaction.created_at)[1]}
                    </div>
                </td>
                <td className='col2'>
                    {<svg stroke="rgb(247, 147, 26)" class="recentActivitySVG" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)">
                            <circle cx="15" cy="15" r="15"></circle><path d="M23.684 17.368H7.895l5.526 5.527M6.316 12.632h15.789l-5.526-5.527">
                            </path>
                        </g>
                    </svg>}
                </td>
               <td className='col3'>
                    <div className='first_col3'>
                        {convertTransaction(transaction)}  
                    </div>
                    <div className='second_col3'>
                        {convertCoin(transaction)}
                    </div>
               </td>
               <td className='col_4'>
                   <div className='col_4_amount'>{convertAmount(transaction) + '  ' + transaction.asset}</div>
                   <div className='col_4_usd'>{'$' + '  ' + parseInt(transaction.amount_usd).toFixed(2)}</div>
               </td>
            </tr>
        );
    }
};

export default RecentTransactions;