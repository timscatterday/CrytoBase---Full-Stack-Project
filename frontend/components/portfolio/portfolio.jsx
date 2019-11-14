import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (

        <div className='user_dashboard'>

            <div className='user_portfolio'>

                <div className='portfolio_title'>
                    <p className='portfolio_value'>Portfolio Value:</p>
                    <p className='total'>$1,000</p>
                </div>

            </div>

            <div className='user_following'>
                <h2>Following</h2>
                    <div className='grid_container' >
                        <div className='grid-item'></div>
                        <div className='grid-item'></div>
                        <div className='grid-item'></div>
                        <div className='grid-item'></div>
                        <div className='grid-item'></div>
                        <div className='grid-item'></div>
                    </div>
            </div>

        </div>

        )
    };

};

export default Portfolio;