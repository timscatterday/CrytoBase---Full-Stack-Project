export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';
import * as APIUtil from '../util/crypto_currency_api';

export const receiveAssets = assets => ({
    type: RECEIVE_ASSETS,
    assets
});


export const fetchAPIAssets = () => dispatch => {
    return (
        Promise.all([APIUtil.fetchAssets(),APIUtil.fetchGraphPrices(), APIUtil.fetchConversionRate()])
            .then(res => dispatch(receiveAssets(res)))
    );
};





