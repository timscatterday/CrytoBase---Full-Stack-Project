import React from 'react';
import {Progress} from 'semantic-ui-react';

class PBar extends React.Component {
    constructor(props){
        super(props)
    };

    render(){
        const {allocation} = this.props

        return (
            <div>
                <Progress percent={allocation} />
            </div>
        )
    }
};

export default PBar;