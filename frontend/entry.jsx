import React from 'react';
import ReactDOM from "react-dom";
import {fetchAPIAssets} from './actions/assets_actions'
import configureStore from './store/store.js'
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import {fetchConversionRate} from './util/crypto_currency_api'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };
    window.store = store;
    window.fetchConversionRate = fetchConversionRate;
    window.dispatch = store.dispatch;
    window.fetchAPIAssets = fetchAPIAssets;
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});