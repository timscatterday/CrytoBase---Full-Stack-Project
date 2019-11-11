
export const fetchAssets = () => {
    return $.ajax({
        url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,EOS,BCH&tsyms=USD,EUR",
        method: 'GET',
    });
};

export default fetchAssets;



