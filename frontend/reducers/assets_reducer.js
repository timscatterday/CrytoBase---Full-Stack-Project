import { RECEIVE_ASSETS } from "../actions/assets_actions";

const assetsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ASSETS:
            return { assets: action }
        default:
            return state;
    }
};

export default assetsReducer;