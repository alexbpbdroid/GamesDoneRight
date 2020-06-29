Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :games, only: [:index, :show]
    resources :reviews
    resource :session, only: [:create, :destroy]
    
  end
  
end
