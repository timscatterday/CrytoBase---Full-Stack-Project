export const RECEIVE_ASSETS = 'RECEIVE_CRYPTOS';
import * as APIUtil from '../util/crypto_currency_api';

export const receiveAssets= assets => ({
    type: RECEIVE_ASSETS,
    assets
});


export const getAssets = (assets) => dispatch => {
    return APIUtil.fetchAssets()
        .then(assets => dispatch(receiveAssets(assets)),
            err => (dispatch(receiveErrors(err.responseJSON)))
        )
};



