import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import entitiesReducer from "./entities_reducer.js";
import errorsReducer from "./errors_reducer.js"

const rootReducer = combineReducers({
    session: sessionErrorsReducer,
    entities: entitiesReducer,
    errors: errorsReducer
});

export default rootReducer;