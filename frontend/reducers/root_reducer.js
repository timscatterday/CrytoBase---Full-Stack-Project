import { combineReducers } from "redux";
import sessionReducer from "./sessions_reducer";
import entitiesReducer from "./entities_reducer.js";
import errorsReducer from "./errors_reducer.js"

const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
});

export default rootReducer;