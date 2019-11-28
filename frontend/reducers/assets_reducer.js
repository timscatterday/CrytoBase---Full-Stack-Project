import { RECEIVE_ASSETS} from "../actions/assets_actions";

const assetsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ASSETS:
            let keys = ['502','1186','1991','1140','290']

            let nextState = Object.assign({}, state , action.assets[0]['DISPLAY'])

            for(var i = 0; i < Object.keys(nextState).length;i ++){
                nextState[Object.keys(nextState)[i]].prices = action.assets[1][keys[i]].prices
            }

            for(var i = 0; i < Object.keys(nextState).length; i++){
                nextState[Object.keys(nextState)[i]].conversion = action.assets[2]['RAW']['USD'][Object.keys(nextState)[i]]['PRICE']
            }

            return nextState;
        default:
            return state;
    }
};

export default assetsReducer;