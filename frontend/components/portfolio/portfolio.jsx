import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
        <div className='user_home'>
            <h2>Following</h2>
            <div className='grid_container' >
                <div className='grid-item'>1</div>
                <div className='grid-item'>2</div>
                <div className='grid-item'>3</div>
                <div className='grid-item'>4</div>
                <div className='grid-item'>5</div>
                <div className='grid-item'>6</div>
            </div>
        </div>
        )
    };

};

export default Portfolio;