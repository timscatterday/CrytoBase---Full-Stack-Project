# README

## CryptoBase

Cryptobase is a clone of the web application Coinbase. Cryptobase enables users to create portfolios to buy and sell cryptocurrencies at real time prices.

## Link

https://cryptobase-1.herokuapp.com/#/

## Frameworks/Languages

* Frontend
  * Framework
    * React and Redux 
  * Language
    * JavaScript
* Backend
  * Framework
    * Rails
  * Language
    * Ruby

## Features

* Retrieves real time cryptocurrency prices and exchange rates
* Displays each users portfolio value and asset allocation

### Landing Page

![Landing Page](https://user-images.githubusercontent.com/46978514/70005346-24462380-151e-11ea-93b5-6b436872d79f.png)

* Real time cryptocurrency asset prices and 24 hour price change retrieved using external AJAX request to https://min-api.cryptocompare.com
* Real time graphs show year to date performance of each cryptocurrency using Sparkline React library and real time cryptocurrency asset prices from third party API https://api.nomics.com 

### Portfolio Page

<img width="1900" alt="Screen Shot 2020-02-24 at 8 38 19 AM" src="https://user-images.githubusercontent.com/46978514/75171825-1c42ed80-56e1-11ea-8669-2dbd648ee22b.png">
<img width="1888" alt="Screen Shot 2020-02-24 at 8 39 22 AM" src="https://user-images.githubusercontent.com/46978514/75171857-2b29a000-56e1-11ea-9e9d-599282b0f0e8.png">

* Portfolio page accuratley displays the real time value of the User's portfolio based upon their current cryptocurrency allocation
* User's can view their current asset allocation on the 'Your Assets' chart and see their most recent transactions with their corresponding trade value on the Recent Transactions chart

### Trade Page

<img width="1436" alt="Screen Shot 2020-02-23 at 9 52 18 PM" src="https://user-images.githubusercontent.com/46978514/75172025-72179580-56e1-11ea-83c2-2f1f9090135a.png">

* Trade page integrates exchange rates from external APIs and allows users to buy and sell Bitcoin, Ethereum, Bitcoin Cash, Litecoin, and EOS at real time prices
* Created RESTful Transaction API endpoint to persist user's buy and sell transactions to database, creating historical record of all users transactions
