import { RECEIVE_ASSETS } from "../actions/assets_actions";

const assetsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ASSETS:
            let nextState = Object.assign({},state, action.assets['DISPLAY'])

            return nextState;
        default:
            return state;
    }
};

export default assetsReducer;