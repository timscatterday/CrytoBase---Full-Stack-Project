import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import assetsReducer from "./assets_reducer"
import transactionReducer from "./transactions_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    assets: assetsReducer,
    transactions: transactionReducer
});

export default entitiesReducer;