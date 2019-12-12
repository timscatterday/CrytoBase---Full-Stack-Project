import {API_URL} from './urls'

export const fetchTransactions = (user_id) => {
    return $.ajax({
        url: `api/transactions/by_user_id/${user_id}`,
        method: 'GET',
    });
};
