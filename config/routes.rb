Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resource :transactions, only: [:create, :show]
    get 'transactions/by_user_id/:user_id', to: 'transactions#by_user_id'
  end



  root "static_pages#root"

end
