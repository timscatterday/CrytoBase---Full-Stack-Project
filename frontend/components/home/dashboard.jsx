import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Dashboard extends React.Component {
    constructor(props){
        super(props)

    };

    render(){

        const {assetname, img, chart_color, ticker} = this.props;

        if (!this.props.assets[`${ticker}`]) {
            return null;
        }

        return(
            <tr>
                <td><div className={`${assetname}Logo`}><div className='pic'><img src={img} height='36' width='36' /></div> <div className='crypto_name'>{assetname} <div className='symbol'>BTC</div></div></div></td>
                <td>{this.props.assets[`${ticker}`]['USD']['PRICE']}</td>
                <td style={{ color: this.props.assets[`${ticker}`]['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>% {this.props.assets[`${ticker}`]['USD']['CHANGEPCT24HOUR']}</td>
                <td>
                    <div className='graph'>
                        <Sparklines data={Object.values(this.props.assets[`${ticker}`].prices)} width={100} height={50} margin={5}>
                            <SparklinesLine style={{ fill: "none" }} color={chart_color} />
                        </Sparklines>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Dashboard;