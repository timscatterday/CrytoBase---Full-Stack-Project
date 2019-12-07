class TransactionController < ApplicationController
    
    def create
        
    end

    def show
        
    end

    def by_user_id
        Transaction.where(['user_id =:u', {u: params[:user_id]}])
    end

end
