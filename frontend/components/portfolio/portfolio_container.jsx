import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchAPIAssets } from '../../actions/assets_actions';

const mapStateToProps = state => {
    return {
        assets: state.entities.assets
    }
};

const mapDispatchToProps = dispatch => ({
    getAssets: () => dispatch(fetchAPIAssets())
});

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);