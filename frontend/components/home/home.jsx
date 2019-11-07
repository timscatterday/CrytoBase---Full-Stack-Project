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
        </div>
      )
    }
};

export default Home;