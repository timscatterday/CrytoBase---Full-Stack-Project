import { connect } from 'react-redux';
import Home from './home';


const mapStateToProps = state => ({
    assets: state.assets
});

const mapDispatchToProps = state => ({
    
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);



