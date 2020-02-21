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

### Portfolio Page and Allocation Chart

<img width="1723" alt="Screen Shot 2020-02-19 at 10 04 03 AM" src="https://user-images.githubusercontent.com/46978514/74861432-3060a680-52ff-11ea-9fe5-6a3d42a6e5f3.png">

<img width="849" alt="Screen Shot 2020-02-19 at 9 53 00 AM" src="https://user-images.githubusercontent.com/46978514/74860579-c1368280-52fd-11ea-8eb0-425ccc26eaf2.png">

<img width="849" alt="Screen Shot 2020-02-19 at 9 53 45 AM" src="https://user-images.githubusercontent.com/46978514/74860583-c267af80-52fd-11ea-8703-5691ae78bf73.png">

* Users are able to buy and sell cryptocurrency assets at real-time exchange rates
* Created RESTful Transaction API endpoint to persist user's buy and sell transactions to database, creating historical record of all users transactions
* Created functions that calculate user's current total portfolio value upon login. Functions calculate how much of each cryptocurrency asset has been bought from historical transacactions database. Once amount of each cryptocurrency asset in portfolio has been calculated multiply each cryptocurrency holding by the exchange rate to calculate USD ($) value per cryptocurrency in portfolio. Sum each of these individual values up to determine total portfolio value in USD ($)

<img width="849" alt="Screen Shot 2020-02-19 at 9 48 11 AM" src="https://user-images.githubusercontent.com/46978514/74860227-2473e500-52fd-11ea-8475-5d2a40f6da28.png">

* Allocation Chart displays how much of each cryptocurrency asset is in portfolio, as well as percent of each cryptocurrency asset holding relative to total amount of cryptocurrency in user portfolio 
