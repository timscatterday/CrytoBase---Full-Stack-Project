import React from 'react';

class Email extends React.Component {
    constructor(props){
        super(props)

    };

    handleEmailChange() {
        return (e) => this.setState({ email: e.target.value })
    }

    render(){
        
        return(
            <div className='get_started'>
                <div className='input_bar'>
                    <form onSubmit={() => this.getStarted()} >
                        <div className='home_input'>
                            <div className='main_form'>
                                <input className='input' type="text" placeholder='Email Address' onChange={this.handleEmailChange()} />
                            </div>

                            <div className='main_button'>
                                <button className='home_button'>Get Started</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

};

export default Email;