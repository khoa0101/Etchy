Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:show,:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :carts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
  end

  root "static_pages#root"

  get '*path', to: "static_pages#frontend_index"
end
