import { connect } from 'react-redux';
import Home from './home';
import {getAssets} from '../../actions/assets_actions'


const mapStateToProps = state => {
    return {
        assets : state.entities.assets
    }
};

const mapDispatchToProps = dispatch => ({
    getAssets: () => dispatch(getAssets())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);



