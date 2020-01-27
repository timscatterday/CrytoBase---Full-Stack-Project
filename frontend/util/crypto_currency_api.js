import {API_URL} from './urls';

export const fetchAssets = () => {
    return $.ajax({
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,EOS,BCH&tsyms=USD,EUR",
        method: 'GET'
    });
};

export const fetchConversionRate = () => {
    return $.ajax({
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USD&tsyms=EOS,BCH,BTC,ETH,LTC",
        method: 'GET',
    });
};

export const fetchGraphPrices = () => {
    return $.ajax({
        url: `https://api.nomics.com/v1/currencies/sparkline?key=df6b8b65f5d99750855095b6243c05d2&start=2019-01-01T00%3A00%3A00Z&end=2019-30-12T00%3A00%3A00Z&c`,
        method: 'GET',
    });
};





