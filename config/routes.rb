Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :games, only: [:index, :show]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    
  end
  root "static_pages#root"
end
