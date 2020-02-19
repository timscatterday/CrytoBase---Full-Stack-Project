# README

## CryptoBase

Cryptobase is a clone of the web application Coinbase. Cryptobase allows users to buy and sell cryptocurrencies at real time prices.

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

* Real time cryptocurrency asset prices and 24 hour price change retrieved using external api call to https://min-api.cryptocompare.com
* Real time graphs show year to date performance of each cryptocurrency using Sparkline React library and real time cryptocurrency asset prices from https://api.nomics.com 

### Portfolio Page

<img width="849" alt="Screen Shot 2020-02-19 at 9 53 00 AM" src="https://user-images.githubusercontent.com/46978514/74860579-c1368280-52fd-11ea-8eb0-425ccc26eaf2.png">

<img width="849" alt="Screen Shot 2020-02-19 at 9 53 45 AM" src="https://user-images.githubusercontent.com/46978514/74860583-c267af80-52fd-11ea-8703-5691ae78bf73.png">


* Users are able to buy and sell cryptocurrency assets at current exchange rates.
* Created Transaction API endpoint to persist user's buy and sell transactions to database, creating historical record of all users transactions
* Portfolio's real time value is calculated through historical transaction records from database upon user login to display current value of portfolio and individual holdings.
* Allocation Chart displays percent of each cryptocurrency asset holding relative to total amount of cryptocurrency in user portfolio 
