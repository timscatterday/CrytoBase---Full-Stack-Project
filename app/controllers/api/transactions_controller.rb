class Api::TransactionsController < ApplicationController
    

    def create
        user_id = params[:user_id]
        asset = params[:asset]
        price = params[:price]
        amount = params[:amount]
        amount_usd = params[:amount_usd]

        # suppose to wait for validation

        @transaction = Transaction.create(
            :user_id => user_id,
            :asset => asset,
            :price => price,
            :amount => amount,
            :amount_usd => amount_usd
        )

        render json: @transaction
        
    end

    def show
        @transcations = Transaction.all

        render json: @transcations
    end
    
    def by_user_id
        @transactions = Transaction.where(['user_id =:u', {u: params[:user_id]}])

        render json: @transactions
    end

end