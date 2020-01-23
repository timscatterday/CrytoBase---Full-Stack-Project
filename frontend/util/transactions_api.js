import {API_URL} from './urls'

export const fetchTransactions = (user_id) => {
    return $.ajax({
        url: `api/transactions/by_user_id/${user_id}`,
        method: 'GET',
    });
};

export const createTransaction = (user_id, transaction) => {
    debugger;
    const data = {
        asset: transaction.ticker,
        price: transaction.price,
        amount: transaction.amount,
        amount_usd: Math.round(transaction.price * transaction.amount),
        user_id: user_id,
        type: transaction.type
    }
    return $.ajax({
        url: `api/transactions/`,
        method: 'POST',
        data
    });
};
