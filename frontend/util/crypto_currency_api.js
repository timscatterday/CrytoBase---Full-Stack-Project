
export const fetchAssets = () => {
    return $.ajax({
        url: "https://api.nomics.com/v1/currencies/sparkline?key=b852129db0b6a9f9d525a2dcbfb4cb86&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z",
        method: 'GET',
    });
};

export default fetchAssets;



