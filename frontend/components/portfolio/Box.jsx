import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { withRouter } from 'react-router';

class Box extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        const {assets, assetname, chart_color, img, fullassetname} = this.props;

        if (!this.props.assets[`${assetname}`]) {
            return null;
        }

        return(
            <div className='box' onClick={() => this.props.history.push('/trade')}>
                <div className='top'>
                    <div className='top_name'>
                        <img className='top_img' src={img} height='18' width='18' />
                        <div>{fullassetname}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='middle'>
                    <div className='middle_price'>
                        {assets[`${assetname}`]['USD']['PRICE']}
                    </div>
                    <div className='middle_percent' style={{ color: assets[`${assetname}`]['USD']['CHANGEPCT24HOUR'] > 0 ? 'green' : 'red' }}>
                        {'% ' + assets[`${assetname}`]['USD']['CHANGEPCT24HOUR']}
                    </div>
                </div>
                <div className='bottom'>
                    <Sparklines data={Object.values(this.props.assets[`${assetname}`].prices)} width={100} height={50} margin={5}>
                        <SparklinesLine style={{ fill: "none" , strokeWidth: 2}} color={chart_color} />
                    </Sparklines>
                </div>
            </div>
        )
    }
};

export default withRouter(Box);