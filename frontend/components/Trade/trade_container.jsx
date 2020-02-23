import { connect } from 'react-redux';
import Trade from './trade';
import { createTransaction, fetchAPITransactions } from '../../actions/transactions_actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(Trade);