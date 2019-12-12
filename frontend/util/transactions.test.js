const INITIAL_USD_AMOUNT = 10000
const prices = {BTC: {
    USD: {
        price: '$7000.00'
    }
}}

const fromStringtoDollar = (usd_string) => {
    return parseFloat(usd_string.trim().replace(/\$|,/g, ''));
}

const user_ticker_amount = (ticker, transactions) => {
    const transactions_with_ticker = transactions.filter((transaction) => {
        if (transaction.asset === ticker) {
            return true;
        }
    })

    const amount_of_ticker = transactions_with_ticker.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0)

    return amount_of_ticker;
};

const user_ticker_value = (ticker, transactions, current_value) => {
    const ticker_amount = user_ticker_amount(ticker, transactions);

    return Math.round(ticker_amount * current_value)
}

const user_portfolio_value = (transactions, current_values) => {
    const tickers = ['BTC', 'ETH', "BCH", "LTC", "EOS"];

    tickers.reduce((acc, ticker) => {
        const ticker_value = user_ticker_value(ticker, transactions, fromStringtoDollar(current_values[ticker]['USD'].price));
        return acc + ticker_value;
    }, 0);
};

const transactions = [ {
amount: 1,
amount_usd: -12345,
asset: "BTC",
created_at: "2019-12-06T22:24:22.842Z",
id: 2,
price: 7000,
updated_at: "2019-12-06T22:24:22.842Z",
user_id: 1 },
 ]

describe('amount_usd', () => {
    test('user_amount', () => expect(user_usd_amount(transactions)).toBe(INITIAL_USD_AMOUNT - 12345))
})

describe('ticker_amount', () => {
    test('user_ticker_amount', () => expect(user_ticker_amount('BTC', transactions)).toBe(1))
})

describe('ticker_value', () => {
    test('user_ticker_value', () => expect(user_ticker_amount('BTC', transactions)).toBe(1))
})