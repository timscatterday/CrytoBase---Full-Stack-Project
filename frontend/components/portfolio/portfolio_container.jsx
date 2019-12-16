import { connect } from 'react-redux';
import Portfolio from './portfolio';
import { fetchAPIAssets } from '../../actions/assets_actions';
import { fetchAPITransactions, createTransaction } from '../../actions/transactions_actions';


const mapStateToProps = state => {
    return {
        assets: state.entities.assets,
        transactions: state.entities.transactions
    }
};

const mapDispatchToProps = dispatch => ({
    getAssets: () => dispatch(fetchAPIAssets()),
    fetchTransactions: () => dispatch(fetchAPITransactions()),
    createTransaction: (transaction) => dispatch(createTransaction(transaction))
});

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio);