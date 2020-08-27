Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :games, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :reviews
    resources :wishlists, only: [:index, :show, :create, :update, :destroy]
    resources :carts, only: [:index, :show, :create, :update, :destroy]
    resources :libraries, only: [:index, :show, :create, :update, :destroy]
  end  
end
