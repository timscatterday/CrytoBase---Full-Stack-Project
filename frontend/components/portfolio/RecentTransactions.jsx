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
        console.log(transaction);

        if(!transaction){
            return null
        };

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

        return(
            <tr>
               <td className='recent_date'>
                   <div>
                        {convertDate(transaction.created_at)[0]}
                   </div>
                    <div>
                        {convertDate(transaction.created_at)[1]}
                    </div>
                </td>
               <td>{}</td>
               <td>{}</td>
            </tr>
        );
    }
};

export default RecentTransactions;