import { connect } from 'react-redux';
import Home from './home';
import {fetchAPIAssets} from '../../actions/assets_actions'


const mapStateToProps = state => {
    return {
        assets : state.entities.assets
    }
};

const mapDispatchToProps = dispatch => ({
    getAssets: () => dispatch(fetchAPIAssets())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);



