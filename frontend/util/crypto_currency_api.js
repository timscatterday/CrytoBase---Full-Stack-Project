
export const fetchAssets = () => {
    return $.ajax({
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,EOS,BCH&tsyms=USD,EUR",
        method: 'GET',
    });
};

export const fetchGraphPrices = () => {
    return $.ajax({
        url: `https://api.nomics.com/v1/currencies/sparkline?key=2018-09-demo-dont-deploy-b69315e440beb145&start=${new Date().getFullYear()}-01-10T00%3A00%3A00Z&end=${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}T00%3A00%3A00Z&c`,
        method: 'GET'
    });
};





