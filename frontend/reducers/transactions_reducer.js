import {FETCH_TRANSACTIONS} from '../actions/transactions_actions';

const transactionReducer = (state = [], action) => {
    
    switch(action.type){
        case FETCH_TRANSACTIONS:
            return action.payload

        default: return state;
    }

}

export default transactionReducer;