export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
import * as APIUtil from '../util/transactions_api';

export const fetchTransactions = transactions => ({
    type: FETCH_TRANSACTIONS,
    payload: transactions[0]
});


export const createTransaction = transaction => {
    const user_id = (window.store) ? window.store.getState().session.id : 0;

    return (
        Promise.all([APIUtil.createTransaction(user_id, transaction)])
            .then(res => dispatch(fetchAPITransactions())) // reload the state
    );
};


export const fetchAPITransactions = () => dispatch => {
    console.log('transactions_actions FetchAPITransactions store', store);
    // if store is available get user otherwise return default id
    const user_id = (window.store) ? window.store.getState().session.id : 0;

    return (
        Promise.all([APIUtil.fetchTransactions(user_id)])
            .then(res => dispatch(fetchTransactions(res)))
    );
};